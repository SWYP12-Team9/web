import { axiosInstance } from '../instance/axiosInstance'

export interface TopReference {
  rank: number
  id: number
  title: string
  colorCode: string
  linkCount: number
}

export interface TopReferencesData {
  date: string
  references: TopReference[]
  text: string
}

export interface ReadStateData {
  date: string
  readLinkCount: number
  unreadLinkCount: number
  readLinkPercent: number
  unreadLinkPercent: number
  text: string
}

export interface DayCount {
  day: string
  linkCount: number
}

export interface SavePatternData {
  period: string
  peakDay: string
  counts: DayCount[]
  text: string
}

export interface MyPageStatsResponse {
  status: number
  message: string
  data: {
    topReferences: TopReferencesData
    readState: ReadStateData
    savePattern: SavePatternData
  }
}

export const requestGetMyPageStats = async () => {
  const res = await axiosInstance.get<MyPageStatsResponse>('/users/stats')
  return res.data
}
