import { axiosInstance } from '../instance/axiosInstance'

interface RequestPostLogoutParams {
  body: {
    refreshToken: string
  }
}

export const requestPostLogout = async ({ body }: RequestPostLogoutParams) => {
  const res = await axiosInstance.post('/auth/logout', body)
  return res.data
}
