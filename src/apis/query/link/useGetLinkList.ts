import { useQuery } from '@tanstack/react-query'
import { requestGetLinkList } from '../../request/requestGetLinkList'
import { linkKeys } from './linkKeys'

export const useGetLinkList = () => {
  return useQuery({
    queryKey: linkKeys.list(),
    queryFn: () => requestGetLinkList({}),
  })
}
