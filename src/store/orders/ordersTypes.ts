import { TCar } from '../cars'
import { TRate } from '../rates'

export type TOrdersAction = {
  list: () => (dispatch: any) => void
}

export type TOrder = {
  carId: TCar
  cityId: { name: string; id: string }
  color: string
  createdAt: number
  dateFrom: number
  dateTo: number
  id: string
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
  orderStatusId: { name: string; id: string }
  pointId: { address: string; name: string; id: string }
  price: number
  rateId: TRate
  updatedAt: number
}

export type TOrders = {
  fetchingState: string
  data: TOrder[]
  errorText: string
}
