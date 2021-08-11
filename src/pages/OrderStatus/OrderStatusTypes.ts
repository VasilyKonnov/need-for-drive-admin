import { TOrderStatus } from '../../store/orderStatus'

export type TOrderStatusView = {
  isOpenAdd: boolean
  isOpenEdit: boolean
  handleOpenAdd: () => void
  handleCloseAdd: () => void
  handleOpenEdit: (id: string) => void
  handleCloseEdit: () => void
  orderStatus: TOrderStatus[]
  handleAddStatus: (e: React.FormEvent<HTMLInputElement>) => void
  handleEditStatus: (e: React.FormEvent<HTMLInputElement>) => void
  addStatus: string
  editStatus: string
  addOrderStatus: () => void
  updateOrderStatus: () => void
  removeOrderStatus: () => void
}
