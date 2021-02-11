export interface AdInfo {}

export interface AvatarSmall {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarBig {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarLarger {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarMedium {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarThumb {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface CoverUrl {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface OriginalMusician {
  digg_count: number
  music_count: number
  music_used_count: number
}

export interface ShareQrcodeUrl {
  height: number
  uri: string
  url_list: any[]
  width: number
}

export interface ShareInfo {
  share_desc: string
  share_desc_info: string
  share_qrcode_url: ShareQrcodeUrl
  share_title: string
  share_title_myself: string
  share_title_other: string
  share_url: string
}

export interface VideoIcon {
  height: number
  uri: string
  url_list: any[]
  width: number
}

export interface Author {
  accept_private_policy: boolean
  account_region: string
  ad_cover_url?: any
  apple_account: number
  authority_status: number
  avatar_168x168: AvatarSmall
  avatar_300x300: AvatarBig
  avatar_larger: AvatarLarger
  avatar_medium: AvatarMedium
  avatar_thumb: AvatarThumb
  avatar_uri: string
  aweme_count: number
  bind_phone: string
  bold_fields?: any
  can_set_geofencing?: any
  cha_list?: any
  comment_filter_status: number
  comment_setting: number
  commerce_user_level: number
  cover_url?: CoverUrl[]
  create_time: number
  custom_verify: string
  cv_level: string
  download_prompt_ts: number
  download_setting: number
  duet_setting: number
  enterprise_verify_reason: string
  favoriting_count: number
  fb_expire_time: number
  follow_status: number
  follower_count: number
  follower_status: number
  followers_detail?: any
  following_count: number
  geofencing?: any
  google_account: string
  has_email: boolean
  has_facebook_token: boolean
  has_insights: boolean
  has_orders: boolean
  has_twitter_token: boolean
  has_youtube_token: boolean
  hide_search: boolean
  homepage_bottom_toast?: any
  ins_id: string
  is_ad_fake: boolean
  is_block: boolean
  is_discipline_member: boolean
  is_phone_binded: boolean
  is_star: boolean
  item_list?: any
  language: string
  live_agreement: number
  live_commerce: boolean
  live_verify: number
  mutual_relation_avatars?: any
  name_field: string
  need_points?: any
  need_recommend: number
  nickname: string
  original_musician: OriginalMusician
  platform_sync_info?: any
  prevent_download: boolean
  qa_status: number
  react_setting: number
  region: string
  relative_users?: any
  room_id: number
  search_highlight?: any
  sec_uid: string
  secret: number
  share_info: ShareInfo
  share_qrcode_uri: string
  shield_comment_notice: number
  shield_digg_notice: number
  shield_follow_notice: number
  short_id: string
  show_image_bubble: boolean
  signature: string
  special_lock: number
  status: number
  stitch_setting: number
  total_favorited: number
  tw_expire_time: number
  twitter_id: string
  twitter_name: string
  type_label?: any
  uid: string
  unique_id: string
  unique_id_modify_time: number
  user_canceled: boolean
  user_mode: number
  user_period: number
  user_rate: number
  user_tags?: any
  verification_type: number
  verify_info: string
  video_icon: VideoIcon
  white_cover_url?: any
  with_commerce_entry: boolean
  with_shop_entry: boolean
  youtube_channel_id: string
  youtube_channel_title: string
  youtube_expire_time: number
}

export interface DownloadGeneral {
  code: number
  extra: string
  mute: boolean
  show_type: number
  transcode: number
}

export interface DownloadMaskPanel {
  code: number
  extra: string
  mute: boolean
  show_type: number
  transcode: number
}

export interface AwemeAcl {
  download_general: DownloadGeneral
  download_mask_panel: DownloadMaskPanel
  platform_list?: any
}

export interface ExtraAttr {
  is_live: boolean
}

export interface ShareInfo {
  bool_persist: number
  share_desc: string
  share_desc_info: string
  share_quote: string
  share_signature_desc: string
  share_signature_url: string
  share_title: string
  share_title_myself: string
  share_title_other: string
  share_url: string
}

export interface ChaList {
  author: Author
  banner_list?: any
  cha_attrs?: any
  cha_name: string
  cid: string
  collect_stat: number
  connect_music: any[]
  desc: string
  extra_attr: ExtraAttr
  hashtag_profile: string
  is_challenge: number
  is_commerce: boolean
  is_pgcshow: boolean
  schema: string
  search_highlight?: any
  share_info: ShareInfo
  show_items?: any
  sub_type: number
  type: number
  user_count: number
  view_count: number
}

export interface CommerceInfo {
  adv_promotable: boolean
  auction_ad_invited: boolean
  with_comment_filter_words: boolean
}

export interface LabelTop {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarMedium {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarThumb {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface CoverLarge {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface CoverMedium {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface CoverThumb {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface PlayUrl {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface Music {
  album: string
  artists: any[]
  audition_duration: number
  author: string
  author_deleted: boolean
  author_position?: any
  avatar_medium: AvatarMedium
  avatar_thumb: AvatarThumb
  binded_challenge_id: number
  collect_stat: number
  cover_large: CoverLarge
  cover_medium: CoverMedium
  cover_thumb: CoverThumb
  dmv_auto_show: boolean
  duration: number
  external_song_info: any[]
  extra: string
  id: number
  id_str: string
  is_audio_url_with_cookie: boolean
  is_author_artist: boolean
  is_commerce_music: boolean
  is_matched_metadata: boolean
  is_original: boolean
  is_original_sound: boolean
  is_pgc: boolean
  lyric_short_position?: any
  mid: string
  mute_share: boolean
  offline_desc: string
  owner_handle: string
  owner_id: string
  owner_nickname: string
  play_url: PlayUrl
  position?: any
  prevent_download: boolean
  preview_end_time: number
  preview_start_time: number
  search_highlight?: any
  sec_uid: string
  shoot_duration: number
  source_platform: number
  status: number
  tag_list?: any
  title: string
  unshelve_countries?: any
  user_count: number
  video_duration: number
}

export interface RiskInfo {
  content: string
  risk_sink: boolean
  type: number
  vote: boolean
  warn: boolean
}

export interface ShareInfo {
  bool_persist: number
  share_desc: string
  share_desc_info: string
  share_link_desc: string
  share_quote: string
  share_signature_desc: string
  share_signature_url: string
  share_title: string
  share_title_myself: string
  share_title_other: string
  share_url: string
  whatsapp_desc: string
}

export interface Statistic {
  aweme_id: string
  comment_count: number
  digg_count: number
  download_count: number
  forward_count: number
  lose_comment_count: number
  lose_count: number
  play_count: number
  share_count: number
  whatsapp_share_count: number
}

export interface ReviewResult {
  review_status: number
}

export interface Statu {
  allow_comment: boolean
  allow_share: boolean
  aweme_id: string
  download_status: number
  in_reviewing: boolean
  is_delete: boolean
  is_prohibited: boolean
  private_status: number
  review_result: ReviewResult
  reviewed: number
  self_see: boolean
}

export interface TextExtra {
  end: number
  hashtag_id: string
  hashtag_name: string
  is_commerce: boolean
  start: number
  type: number
}

export interface AnimatedCover {
  uri: string
  url_list: string[]
}

export interface PlayAddr {
  data_size: number
  file_cs: string
  height: number
  uri: string
  url_key: string
  url_list: string[]
  width: number
}

export interface BitRate {
  bit_rate: number
  gear_name: string
  is_bytevc1: number
  play_addr: PlayAddr
  quality_type: number
}

export interface Cover {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface DownloadAddr {
  data_size: number
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface DownloadSuffixLogoAddr {
  data_size: number
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface DynamicCover {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface OriginCover {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface PlayAddr {
  data_size: number
  file_cs: string
  height: number
  uri: string
  url_key: string
  url_list: string[]
  width: number
}

export interface Video {
  animated_cover: AnimatedCover
  big_thumbs?: any
  bit_rate: BitRate[]
  cdn_url_expired: number
  cover: Cover
  download_addr: DownloadAddr
  download_suffix_logo_addr: DownloadSuffixLogoAddr
  duration: number
  dynamic_cover: DynamicCover
  has_download_suffix_logo_addr: boolean
  has_watermark: boolean
  height: number
  is_bytevc1: number
  is_callback: boolean
  misc_download_addrs: string
  need_set_token: boolean
  origin_cover: OriginCover
  play_addr: PlayAddr
  ratio: string
  tags?: any
  width: number
}

export interface VideoControl {
  allow_download: boolean
  allow_duet: boolean
  allow_dynamic_wallpaper: boolean
  allow_music: boolean
  allow_react: boolean
  allow_stitch: boolean
  draft_progress_bar: number
  prevent_download_type: number
  share_type: number
  show_progress_bar: number
  timer_status: number
}

export interface Item {
  anchors?: any
  anchors_extras: string
  author: Author
  author_user_id: number
  aweme_acl: AwemeAcl
  aweme_id: string
  aweme_type: number
  bodydance_score: number
  cha_list: ChaList[]
  challenge_position?: any
  cmt_swt: boolean
  collect_stat: number
  commerce_config_data?: any
  commerce_info: CommerceInfo
  cover_labels?: any
  create_time: number
  desc: string
  desc_language: string
  distance: string
  distribute_type: number
  geofencing?: any
  geofencing_regions?: any
  group_id: string
  has_vs_entry: boolean
  have_dashboard: boolean
  hybrid_label?: any
  image_infos?: any
  interaction_stickers?: any
  is_hash_tag: number
  is_pgcshow: boolean
  is_preview: number
  is_relieve: boolean
  is_top: number
  is_vr: boolean
  item_comment_settings: number
  item_duet: number
  item_react: number
  item_stitch: number
  label_top: LabelTop
  label_top_text?: any
  long_video?: any
  mask_infos: any[]
  misc_info: string
  music: Music
  need_vs_entry: boolean
  new_label: number
  nickname_position?: any
  origin_comment_ids?: any
  position?: any
  prevent_download: boolean
  rate: number
  region: string
  risk_infos: RiskInfo
  search_highlight?: any
  share_info: ShareInfo
  share_url: string
  sort_label: string
  statistics: Statistic
  status: Statu
  text_extra: TextExtra[]
  uniqid_position?: any
  user_digged: number
  video: Video
  video_control: VideoControl
  video_labels: any[]
  video_text: any[]
  with_promotional_music: boolean
  without_watermark: boolean
}

export interface AvatarSmall {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarBig {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarLarger {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarMedium {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface AvatarThumb {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface CoverUrl {
  height: number
  uri: string
  url_list: string[]
  width: number
}

export interface OriginalMusician {
  digg_count: number
  music_count: number
  music_used_count: number
}

export interface ShareQrcodeUrl {
  height: number
  uri: string
  url_list: any[]
  width: number
}

export interface ShareInfo {
  share_desc: string
  share_desc_info: string
  share_qrcode_url: ShareQrcodeUrl
  share_title: string
  share_title_myself: string
  share_title_other: string
  share_url: string
}

export interface VideoIcon {
  height: number
  uri: string
  url_list: any[]
  width: number
}

export interface UserInfo {
  accept_private_policy: boolean
  account_region: string
  ad_cover_url?: any
  apple_account: number
  authority_status: number
  avatar_168x168: AvatarSmall
  avatar_300x300: AvatarBig
  avatar_larger: AvatarLarger
  avatar_medium: AvatarMedium
  avatar_thumb: AvatarThumb
  avatar_uri: string
  aweme_count: number
  bind_phone: string
  bold_fields?: any
  can_set_geofencing?: any
  cha_list?: any
  comment_filter_status: number
  comment_setting: number
  commerce_user_level: number
  cover_url: CoverUrl[]
  create_time: number
  custom_verify: string
  cv_level: string
  download_prompt_ts: number
  download_setting: number
  duet_setting: number
  enterprise_verify_reason: string
  favoriting_count: number
  fb_expire_time: number
  follow_status: number
  follower_count: number
  follower_status: number
  followers_detail?: any
  following_count: number
  geofencing?: any
  google_account: string
  has_email: boolean
  has_facebook_token: boolean
  has_insights: boolean
  has_orders: boolean
  has_twitter_token: boolean
  has_youtube_token: boolean
  hide_search: boolean
  homepage_bottom_toast?: any
  ins_id: string
  is_ad_fake: boolean
  is_block: boolean
  is_discipline_member: boolean
  is_phone_binded: boolean
  is_star: boolean
  item_list?: any
  language: string
  live_agreement: number
  live_commerce: boolean
  live_verify: number
  mutual_relation_avatars?: any
  name_field: string
  need_points?: any
  need_recommend: number
  nickname: string
  original_musician: OriginalMusician
  platform_sync_info?: any
  prevent_download: boolean
  qa_status: number
  react_setting: number
  region: string
  relative_users?: any
  room_id: number
  search_highlight?: any
  search_user_desc: string
  search_user_name: string
  sec_uid: string
  secret: number
  share_info: ShareInfo
  share_qrcode_uri: string
  shield_comment_notice: number
  shield_digg_notice: number
  shield_follow_notice: number
  short_id: string
  show_image_bubble: boolean
  signature: string
  special_lock: number
  status: number
  stitch_setting: number
  total_favorited: number
  tw_expire_time: number
  twitter_id: string
  twitter_name: string
  type_label?: any
  uid: string
  unique_id: string
  unique_id_modify_time: number
  user_canceled: boolean
  user_mode: number
  user_period: number
  user_rate: number
  user_tags?: any
  verification_type: number
  verify_info: string
  video_icon: VideoIcon
  white_cover_url?: any
  with_commerce_entry: boolean
  youtube_channel_id: string
  youtube_channel_title: string
  youtube_expire_time: number
}

export interface UserData {
  challenges?: any
  effects?: any
  items: Item[]
  mix_list?: any
  musics?: any
  position?: any
  uniqid_position?: any
  user_info: UserInfo
}

export interface Data {
  has_top_user: number
  type: number
  user_list: UserData[]
  view_more: boolean
}

export interface Extra {
  fatal_item_ids: any[]
  logid: string
  now: number
  search_request_id: string
}

export interface AbParam {
  user_relation_ship: string
}

export interface GlobalDoodleConfig {
  ab_params: AbParam
  display_filter_bar: number
  keyword: string
}

export interface LogPb {
  impr_id: string
}

export interface UserSeachResponse {
  ad_info: AdInfo
  backtrace: string
  cursor: number
  data: Data[]
  extra: Extra
  global_doodle_config: GlobalDoodleConfig
  guide_search_words?: any
  has_more: number
  log_pb: LogPb
  qc: string
  status_code: number
}
