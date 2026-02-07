import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { requestPostReferenceFolder } from '../../request/requestPostReferenceFolder'
import { referenceKeys } from './referenceKeys'

export const useCreateReferenceFolderMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: requestPostReferenceFolder,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: referenceKeys.lists() })
    },
    onError: (error: AxiosError) => {
      console.log(error)
    },
  })
}
