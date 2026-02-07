import { useQuery } from '@tanstack/react-query'
import {
  requestGetSearchOtherUserLinks,
  RequestGetSearchOtherUserLinksParams,
} from '../../request/requestGetSearchOtherUserLinks'
import { recommendationKeys } from './recommendationKeys'

export const useGetSearchOtherUserLinks = (
  params: RequestGetSearchOtherUserLinksParams,
) => {
  return useQuery({
    queryKey: recommendationKeys.searchOtherUserLinks(params),
    queryFn: () => requestGetSearchOtherUserLinks(params),
    enabled: !!params.keyword && params.keyword.trim().length > 0,
  })
}
