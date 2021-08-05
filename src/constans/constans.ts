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
  ERROR_500: '/error-500',
}
const perPage = 10
export { xApiFactory, secret, apiUrl, routes, imgUrl, perPage }
export const rateType = {
  week: '5f622f029d3a610b850fd820',
  weekSale: '60b9437e2aed9a0b9b7ed337',
  day: '5e26a082099b810b946c5d83',
  minute: '5e26a07f099b810b946c5d82',
}
