import { useQuery } from '@tanstack/react-query'
import {
  requestGetOtherUserLinkList,
  RequestGetOtherUserLinkListParams,
} from '../../request/requestGetOtherUserLinkList'
import { recommendationKeys } from './recommendationKeys'

export const useGetOtherUserLinkList = (
  params: RequestGetOtherUserLinkListParams,
) => {
  return useQuery({
    queryKey: recommendationKeys.otherUserLinkList(params),
    queryFn: () => requestGetOtherUserLinkList(params),
  })
}
