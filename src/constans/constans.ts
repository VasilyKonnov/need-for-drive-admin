const xApiFactory = '5e25c641099b810b946c5d5b'
const secret = '4cbcea96de'
const apiUrl = 'https://api-factory.simbirsoft1.com/api/'
const imgUrl = 'https://api-factory.simbirsoft1.com'
const routes = {
  LOGIN: '/auth/login',
  REFRESH: '/auth/refresh',
  ORDERS: 'db/orders',
  ORDER: 'db/order',
  CITY: 'db/city',
  POINT: 'db/point',
  RATE: 'db/rate',
  RATETYPE: 'db/rateType',
  CAR: 'db/car',
  CATEGORY: 'db/category',
  ORDER_STATUS: 'db/orderStatus',
}
const perPage = 10
export { xApiFactory, secret, apiUrl, routes, imgUrl, perPage }
