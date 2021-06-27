import axios from 'axios'
import { xApiFactory, secret, apiUrl, routes } from '../../constans/constans'

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    'X-Api-Factory-Application-Id': xApiFactory,
  },
})

authAxios.interceptors.request.use((config) => ({
  ...config,
  data: {
    ...config.data,
    client_secret: secret,
    client_id: '111111',
  },
}))

const updateToken = (requestBody: any) => {
  authAxios.post(routes.REFRESH, requestBody)
}

export { authAxios, updateToken }
