import { JSDOM } from 'jsdom'
import axios from 'axios'

const getInst = (document): string => {
  const getUsernameFromUrl = (link: string) => {
    if (link.indexOf('http') === -1) {
      link = 'htttp://' + link
    }
    return new URL(link).pathname.substring(1)
  }
  const shareLink = new URLSearchParams(
    document.querySelector('.share-links > a')?.getAttribute('href') || ''
  ).get('target')
  if (/.*(i|I)nstagram\.com*/.test(shareLink)) {
    return getUsernameFromUrl(shareLink)
  }
  const instRegexp = /(instagram|inst|ins|ig|инст|инста|инстаграм): ((?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29})/
  const instNick = document
    .querySelector('.share-desc')
    ?.textContent.toLowerCase()
    .match(instRegexp)
  if (instNick) {
    return instNick[2]
  }
  return ''
}
export const getUserByUrl = async (
  url: string
): Promise<UserSearchResponse> => {
  try {
    const page = await axios.get(url).then(({ data }) => data)
    if (page.indexOf('captcha.js') > -1) throw Error('Captha')

    const dom = new JSDOM(page)

    const document = dom.window.document

    const followersData = [
      ...document.querySelectorAll('.count-infos > div')
    ].reduce((acc, e) => {
      return {
        ...acc,
        [e.querySelector('span').textContent.toLowerCase()]: e.querySelector(
          'strong'
        ).textContent
      }
    }, {})
    const inst = getInst(document)
    return { ...followersData, inst }
  } catch (e) {
    console.error('🚀 ~ file: index.ts ~ line 45 ~ e', e)
  }
}
