import { axiosInstance } from '../instance/axiosInstance'

export const requestDeleteReference = async (id: number) => {
  const res = await axiosInstance.delete(`/references/${id}`)

  return res.data
}
