import { authAxios } from '../../serviсes/axios'
import { TLogin } from './apiTypes'

const auth = async (data: TLogin) => {
  const response = await authAxios.post('auth/login', data)
  return response
}

const userApi = {
  auth,
}

export default userApi
