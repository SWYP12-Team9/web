import { useQuery } from '@tanstack/react-query'
import { requestGetMyPageStats } from '../../request/requestGetMypageStats'
import { myPageKeys } from './mypageKeys'

export const useGetMyPageStats = () => {
  return useQuery({
    queryKey: myPageKeys.stats(),
    queryFn: requestGetMyPageStats,
  })
}
