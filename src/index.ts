import TikTokAPI, { CommonUserDetails, getRequestParams } from 'tiktok-api'

// Required - a method that signs the URL with anti-spam parameters
// You must provide an implementation yourself to successfully make
// most requests with this library.
const signURL = async (url, ts, deviceId) => {
  const as = process.env.as
  const cp = process.env.cp
  const mas = 'anti-spam_3'
  return `${url}&as=${as}&cp=${cp}&mas=${mas}`
}

// Required - device parameters
// You need to source these using a man-in-the-middle proxy such as mitmproxy,
// CharlesProxy or PacketCapture (Android)
const params = getRequestParams({
  device_id: process.env.device_id,
  fp: process.env.fpid,
  iid: process.env.iid,
  openudid: process.env.openudid
})

const api = new TikTokAPI(params, { signURL })

const getUserByUrl = async (url: string) => {
  const userName = url.split('@')[1]
  const userFromApi = await api.searchUsers({
    keyword: userName,
    count: 10,
    cursor: 0
  })
  console.log(
    '🚀 ~ file: index.ts ~ line 34 ~ getUserByUrl ~ userFromApi',
    userFromApi
  )
  return
  // .data as any).user_list?.[0]
  // return userFromApi?.user_info as CommonUserDetails
}

getUserByUrl('https://www.tiktok.com/@nevspominay_')
