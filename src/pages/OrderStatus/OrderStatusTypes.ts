import { TOrderStatus } from '../../store/orderStatus'

export type TOrderStatusView = {
  isOpen: boolean
  isEdit: boolean
  handleOpen: () => void
  handleClose: () => void
  handleEdit: () => void
  orderStatus: TOrderStatus[]
}
