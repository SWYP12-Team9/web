import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { requestDeleteReference } from '../../request/requestDeleteReference'
import { referenceKeys } from './referenceKeys'

export const useDeletReferenceMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: requestDeleteReference,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: referenceKeys.lists() })
    },
    onError: (error: AxiosError) => {
      console.log(error)
    },
  })
}
