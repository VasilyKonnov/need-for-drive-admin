import { routes } from '../../constans/constans'
import { TEditCar } from '../../pages/AddCar/AddCarTypes'
import { crudAxios } from '../../serviсes/axios'
import { TEditOrder } from '../../store/orders'

const crud = {
  async getOrder(id: string) {
    const response = await crudAxios.get(`${routes.ORDER}/${id}`)
    return await response.data.data
  },
  async getOrders() {
    // const response = await crudAxios.get(`${routes.ORDER}?limit=75`)
    const response = await crudAxios.get(`${routes.ORDER}`)
    return response.data.data
  },
  async putOrder(id: string, data: TEditOrder) {
    return crudAxios.put(`${routes.ORDER}/${id}`, data)
  },
  async deleteOrder(id: string) {
    return crudAxios.delete(`${routes.ORDER}/${id}`)
  },
  async getCities() {
    const response = await crudAxios.get(`${routes.CITY}`)
    return response.data.data
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
  async getCityPoints() {
    const response = await crudAxios.get(`${routes.POINT}`)
    return response.data.data
  },
  putCityPoints(id: string, body: any) {
    return crudAxios.put(`${routes.POINT}/${id}`, body)
  },
  postCityPoints(body: any) {
    return crudAxios.post(`${routes.POINT}`, body)
  },
  deleteCityPoints(id: string) {
    return crudAxios.delete(`${routes.POINT}/${id}`)
  },
  async getRates() {
    const response = await crudAxios.get(`${routes.RATE}`)
    return response.data.data
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
  async getRateTypes() {
    const response = await crudAxios.get(`${routes.RATETYPE}`)
    return response.data.data
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
  async getCar(id: string) {
    return await crudAxios.get(`${routes.CAR}/${id}`)
  },
  async getCars() {
    const response = await crudAxios.get(`${routes.CAR}`)
    return response.data.data
  },
  postCars(car: TEditCar) {
    return crudAxios.post(`${routes.CAR}`, car)
  },
  putCars(id: string, car: TEditCar) {
    return crudAxios.put(`${routes.CAR}/${id}`, car)
  },
  deleteCars(id: string) {
    return crudAxios.delete(`${routes.CAR}/${id}`)
  },
  async getCarCategories() {
    const response = await crudAxios.get(`${routes.CATEGORY}`)
    return response.data.data
  },
  putCarCategories(id: string, body: any) {
    return crudAxios.put(`${routes.CATEGORY}/${id}`, body)
  },
  postCarCategories(body: any) {
    return crudAxios.post(`${routes.CATEGORY}`, body)
  },
  deleteCarCategories(id: string) {
    return crudAxios.delete(`${routes.CATEGORY}/${id}`)
  },
  async getOrderStatuses() {
    const response = await crudAxios.get(`${routes.ORDER_STATUS}`)
    return response.data.data
  },
  putOrderStatus(id: string, body: any) {
    return crudAxios.put(`${routes.ORDER_STATUS}/${id}`, body)
  },
  postOrderStatus(body: any) {
    return crudAxios.post(`${routes.ORDER_STATUS}`, body)
  },
  deleteOrderStatus(id: string) {
    return crudAxios.delete(`${routes.ORDER_STATUS}/${id}`)
  },
}

export default crud
