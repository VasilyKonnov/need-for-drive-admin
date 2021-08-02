import { TOrder } from '../../store/orders'

export type TOrderCard = {
  imgSrc: string | null
  carName: string
  color: string
  city: string
  pointAddress: string
  dateFrom: any
  dateTo: any
  isFullTank: boolean
  isNeedChildChair: boolean
  isRightWheel: boolean
  price: number
  editOrder: () => void
}
