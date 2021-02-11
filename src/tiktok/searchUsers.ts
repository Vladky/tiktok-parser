import axios, { AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { UserSeachResponse } from './types/UserSeachResponse'

type SearchUsersOptions = {
  keyword: string
  count: number
  offset: number
}

const params = {
  region: 'RU',
  version_name: '18.4.41',
  ts: '1612447275',
  timezone_name: 'Asia%2FTashkent',
  device_type: 'ALCATEL+ONE+TOUCH+5036D',
  iid: '6924621186568095494',
  locale: 'ru-RU',
  app_type: 'tiktok',
  build_number: '18.4.41',
  resolution: '480*854',
  aid: '1233',
  app_name: 'musical_ly',
  _rticket: '1612447285461',
  device_platform: 'android',
  version_code: '180441',
  uoo: '1',
  dpi: '240',
  openudid: 'bf15bf4ee59fa60a',
  cdid: '664e762a-a41f-4df8-9c8f-edaa8c511b7b',
  cpu_support64: 'false',
  sys_region: 'RU',
  ssmix: 'a',
  os_api: '17',
  timezone_offset: '18000',
  device_id: '6924620579191178758',
  device_brand: 'TCT',
  manifest_version_code: '2021804410',
  os_version: '4.2.2',
  ab_version: '18.4.41',
  ac2: 'wifi',
  residence: 'RU',
  host_abi: 'armeabi-v7a',
  update_version_code: '2021804410',
  op_region: 'RU',
  app_language: 'ru',
  ac: 'wifi',
  language: 'ru',
  channel: 'googleplay',
  current_region: 'RU '
}

const headers = { 'User-Agent': 'okhttp/3.10.0.1' }

export const searchUsers = async (
  opts: SearchUsersOptions
): Promise<UserSeachResponse> => {
  const response = await axios.post(
    'https://api16-normal-c-alisg.tiktokv.com/aweme/v1/general/search/single/',
    qs.stringify({
      ...opts,
      search_source: 'search_history',
      hot_search: 0,
      query_correct_type: 1,
      multi_mod: 0,
      is_filter_search: 0,
      publish_time: 0,
      sort_type: 0
    }),
    {
      params,
      headers
    }
  )

  return response.data
}
