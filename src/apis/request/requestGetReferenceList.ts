import {
  ReferenceItem,
  ReferenceSortBy,
  ReferenceVisibility,
} from '@/src/types/reference/reference'
import { BaseResponse } from '@/src/types/response/response'
import { axiosInstance } from '../instance/axiosInstance'

export interface RequestGetReferenceListParams {
  type?: ReferenceVisibility
  sortBy?: ReferenceSortBy
  cursor?: string | null
  size?: number
}

export type RequestGetReferenceListResponse = BaseResponse<{
  contents: ReferenceItem[]
  nextCursor: string
  hasNext: boolean
}>

export const requestGetReferenceList = async ({
  type,
  sortBy,
  cursor,
  size = 20,
}: RequestGetReferenceListParams): Promise<RequestGetReferenceListResponse> => {
  const res = await axiosInstance.get('/references', {
    params: {
      type,
      sortBy,
      cursor,
      size,
    },
  })

  return res.data
}
