import { authAxios } from '../../serviсes/axios'

type TLogin = {
  username: string
  password: string
}

const auth = async (data: TLogin) => {
  const response = await authAxios.post('auth/login', data)
  return response
}

const userApi = {
  auth,
}

export default userApi
