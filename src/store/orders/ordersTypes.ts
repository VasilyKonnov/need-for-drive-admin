import { TCar } from '../cars'
import { TCityPoint } from '../cityPoints'
import { TOrderStatus } from '../orderStatus'
import { TRate } from '../rates'

export type TOrdersAction = {
  list: () => (dispatch: any) => void
  remove: () => (dispatch: any) => void
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

export type TEditOrder = {
  orderStatusId: TOrderStatus | undefined
  cityId:
    | {
        id: string
        name: string
      }
    | undefined
  pointId: TCityPoint | undefined
  carId: TCar
  color: string
  dateFrom: number
  dateTo: number
  rateId: {
    id: string
    price: number
  }
  price: number
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
}

export type TOrders = {
  fetchingState: string
  data: TOrder[]
  errorText: string
}
