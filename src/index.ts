import { getUserByUrl } from './tiktok'
import fs from 'fs'
import readline from 'readline'
import { google } from 'googleapis'

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets']
const TOKEN_PATH = 'token.json'

fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err)

  authorize(JSON.parse(content.toString()), main)
})

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  )

  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback)
    oAuth2Client.setCredentials(JSON.parse(token.toString()))
    callback(oAuth2Client)
  })
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback for the authorized client.
 */
function getNewToken(oAuth2Client, callback) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  })
  console.log('Authorize this app by visiting this url:', authUrl)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.question('Enter the code from that page here: ', code => {
    rl.close()
    oAuth2Client.getToken(code, (err, token) => {
      if (err)
        return console.error('Error while trying to retrieve access token', err)
      oAuth2Client.setCredentials(token)

      fs.writeFile(TOKEN_PATH, JSON.stringify(token), err => {
        if (err) return console.error(err)
        console.log('Token stored to', TOKEN_PATH)
      })
      callback(oAuth2Client)
    })
  })
}

/**
 * Prints the names and majors of students in a sample spreadsheet:
 * @see https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 * @param {google.auth.OAuth2} auth The authenticated Google OAuth client.
 */

const main = auth => {
  const regex = /(^|www\.tiktok\.com\/)@.*$/
  const sheets = google.sheets({ version: 'v4', auth })

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: '1kbsvwSsLZ_pnctxSn8GaXo_Ye3pqk8m9LFxVst3MbsY',
      range: 'A:A'
    },
    async (err, res) => {
      if (err) return console.log('The API returned an error: ' + err)
      const rows = res.data.values
      if (rows.length) {
        const urls = rows
          .map(x => {
            return x ? x[0] : ''
          })
          // .filter(x => regex.test(x))
        const dataset: (string | number)[][] = await Promise.all(
          urls.map(async url => {
            if (!regex.test(url)) {
              return [url, '', '']
            }
            const userData = await getUserByUrl(url)
            if (!userData) {
              return [url, '', '']
            }
            const { ins_id, follower_count } = userData.user_info
            return [url, ins_id, follower_count]
          })
        )
        console.log('🚀 ~ file: index.ts ~ line 105 ~ dataset', dataset)
        await sheets.spreadsheets.values.update({
          spreadsheetId: '1kbsvwSsLZ_pnctxSn8GaXo_Ye3pqk8m9LFxVst3MbsY',
          range: 'A2:C',
          valueInputOption: 'RAW',
          requestBody: {
            values: dataset
          }
        })
      } else {
        console.log('No data found.')
      }
    }
  )
}
