import { getUserByUrl } from './tiktok'
import { google } from 'googleapis'
import { authorize } from './sheets'
import credentials from './credentials.json'

type Dataset = [string, string, string]

const SPREADSHEET_ID = new URL(process.argv[2]).pathname.split('/')[3]

const getDatasetFromUrl = async (url: string): Promise<Dataset> => {
  const regex = /(^|www\.tiktok\.com\/)@.*$/
  if (!regex.test(url)) {
    return [url, '', '']
  }
  const userData = await getUserByUrl(url)
  if (!userData) {
    return [url, '', '']
  }
  const { inst, followers } = userData
  return [url, inst, followers]
}

const main = auth => {
  const sheets = google.sheets({ version: 'v4', auth })

  sheets.spreadsheets.values.get(
    {
      spreadsheetId: SPREADSHEET_ID,
      range: 'A:A'
    },
    async (err, res) => {
      if (err) return console.log('The API returned an error: ' + err)
      const rows = res.data.values
      if (rows.length) {
        const urls: string[] = rows.map(x => (x ? x[0] : ''))

        const datasets: Dataset[] = []
        const getNextUrl = async (index: number, callback) => {
          if (urls[index]) {
            console.log('Process', urls[index])
            try {
              const dataset = await getDatasetFromUrl(urls[index])
              console.log(dataset)
              datasets.push(dataset)
            } catch (e) {
              if (e.message === 'Captcha') {
                callback()
              }
            }
          }
          if (urls[index + 1]) {
            getNextUrl(index + 1, callback)
          } else {
            callback()
          }
        }
        await new Promise(resolve => getNextUrl(0, resolve))

        await sheets.spreadsheets.values.update({
          spreadsheetId: SPREADSHEET_ID,
          range: 'A2:C',
          valueInputOption: 'RAW',
          requestBody: {
            values: datasets
          }
        })
      } else {
        console.log('No data found.')
      }
    }
  )
}

authorize(credentials, main)
