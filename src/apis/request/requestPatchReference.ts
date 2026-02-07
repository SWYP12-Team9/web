import { axiosInstance } from '../instance/axiosInstance'

interface RequestPatchReferenceParams {
  referenceId: number
  body: {
    title?: string
    description?: string
    isPublic?: boolean
    colorCode?: string
  }
}

export const requestPatchReference = async ({
  referenceId,
  body,
}: RequestPatchReferenceParams) => {
  const res = await axiosInstance.patch(`/references/${referenceId}`, body)

  return res.data
}
