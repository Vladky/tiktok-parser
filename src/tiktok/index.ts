import TikTokAPI, { CommonUserDetails, getRequestParams } from 'tiktok-api'
import { searchUsers } from './searchUsers'

// Required - a method that signs the URL with anti-spam parameters
// You must provide an implementation yourself to successfully make
// most requests with this library.
const signURL = async (url, ts, deviceId) => {
  const as = process.env.as
  const cp = process.env.cp
  const mas = 'anti-spam_3'
  return `${url}&as=${as}&cp=${cp}&mas=${mas}`
}

const params = getRequestParams({
  fp: process.env.fpid,
  device_id: '6924620579191178758',
  iid: '6924621186568095494',
  openudid: 'bf15bf4ee59fa60a'
})

export const getUserByUrl = async (url: string) => {
  const userName = url.split('@')[1]
  const userFromApi = await searchUsers({
    keyword: userName,
    count: 1,
    offset: 0
  })
  if (userFromApi.data[0] && userFromApi.data[0].user_list) {
    return userFromApi.data[0].user_list[0]
  }
  return undefined
}
