import queryString from 'query-string'
import { routes } from '../../constans/constans'
import { crudAxios } from '../../serviсes/axios'

const stringifyConfig = {
  skipNull: true,
}

const crud = {
  getOrders(filters: any) {
    const params = {
      limit: filters?.limit,
      page: filters?.page,
      cityId: filters?.city,
      orderStatusId: filters?.status,
      id: filters?.id,
    }
    const stringified = queryString.stringify(params, stringifyConfig)
    return crudAxios.get(`${routes.ORDER}?${stringified}`)
  },
  putOrders(id: string, body: any) {
    const params = {}
    const stringified = queryString.stringify(params, stringifyConfig)
    return crudAxios.put(`${routes.ORDER}/${id}?${stringified}`, body)
  },
  getCities() {
    return crudAxios.get(`${routes.CITY}`)
  },
  putCities(id: string, body: any) {
    return crudAxios.put(`${routes.CITY}/${id}`, body)
  },
  postCities(body: any) {
    return crudAxios.post(`${routes.CITY}`, body)
  },
  deleteCities(id: string) {
    return crudAxios.delete(`${routes.CITY}/${id}`)
  },
  getPoints() {
    return crudAxios.get(`${routes.POINT}`)
  },
  putPoints(id: string, body: any) {
    return crudAxios.put(`${routes.POINT}/${id}`, body)
  },
  postPoints(body: any) {
    return crudAxios.post(`${routes.POINT}`, body)
  },
  deletePoints(id: string) {
    return crudAxios.delete(`${routes.POINT}/${id}`)
  },
  getRates() {
    return crudAxios.get(`${routes.RATE}`)
  },
  putRates(id: string, body: any) {
    return crudAxios.put(`${routes.RATE}/${id}`, body)
  },
  postRates(body: any) {
    return crudAxios.post(`${routes.RATE}`, body)
  },
  deleteRates(id: string) {
    return crudAxios.delete(`${routes.RATE}/${id}`)
  },
  getRateTypes() {
    return crudAxios.get(`${routes.RATETYPE}`)
  },
  putRateTypes(id: string, body: any) {
    return crudAxios.put(`${routes.RATETYPE}/${id}`, body)
  },
  postRateTypes(body: any) {
    return crudAxios.post(`${routes.RATETYPE}`, body)
  },
  deleteRateTypes(id: string) {
    return crudAxios.delete(`${routes.RATETYPE}/${id}`)
  },
  getCars(filters: any) {
    const params = {
      limit: filters?.limit,
      page: filters?.page,
      categoryId: filters?.categoryId,
      id: filters?.id,
    }
    const stringified = queryString.stringify(params, stringifyConfig)
    return crudAxios.get(`${routes.CAR}?${stringified}`)
  },
  postCars(body: any) {
    const params = {}
    const stringified = queryString.stringify(params, stringifyConfig)
    return crudAxios.post(`${routes.CAR}?${stringified}`, body)
  },
  putCars(id: string, body: any) {
    const params = {}
    const stringified = queryString.stringify(params, stringifyConfig)
    return crudAxios.put(`${routes.CAR}/${id}?${stringified}`, body)
  },
  deleteCars(id: string) {
    const params = {}
    const stringified = queryString.stringify(params, stringifyConfig)
    return crudAxios.delete(`${routes.CAR}/${id}?${stringified}`)
  },
  getCategories() {
    return crudAxios.get(`${routes.CATEGORY}`)
  },
  putCategories(id: string, body: any) {
    return crudAxios.put(`${routes.CATEGORY}/${id}`, body)
  },
  postCategories(body: any) {
    return crudAxios.post(`${routes.CATEGORY}`, body)
  },
  deleteCategories(id: string) {
    return crudAxios.delete(`${routes.CATEGORY}/${id}`)
  },
  getStatuses() {
    return crudAxios.get(`${routes.STATUS}`)
  },
  putStatuses(id: string, body: any) {
    return crudAxios.put(`${routes.STATUS}/${id}`, body)
  },
  postStatuses(body: any) {
    return crudAxios.post(`${routes.STATUS}`, body)
  },
  deleteStatuses(id: string) {
    return crudAxios.delete(`${routes.STATUS}/${id}`)
  },
}

export default crud
