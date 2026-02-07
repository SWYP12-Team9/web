import { axiosInstance } from '../instance/axiosInstance'

interface CreateFolderParams {
  title: string
  description: string
  isPublic: boolean
  colorCode: string
}

export const requestPostReferenceFolder = async (
  params: CreateFolderParams,
) => {
  const res = await axiosInstance.post('/references', params)

  return res.data
}
