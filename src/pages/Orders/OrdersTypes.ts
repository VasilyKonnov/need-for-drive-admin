import { TCity } from '../../store/cities'
import { TOrder } from '../../store/orders'
import { TOrderStatus } from '../../store/orderStatus'

export type TOrdersView = {
  orders: TOrder[]
  cities: TCity[]
  orderStatus: TOrderStatus[]
  amountPages: number
  handleCity: (event: React.ChangeEvent<{ value: unknown }>) => void
  handleStatus: (event: React.ChangeEvent<{ value: unknown }>) => void
  handlePaginationClick: (data: { selected: number }) => void
  handleFilterOrders: () => void
  editOrder: (id: string) => void
  removeOrder: (id: string) => void
}
