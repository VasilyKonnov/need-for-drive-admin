import { TOrderStatus } from '../../store/orderStatus'

export type TOrderStatusView = {
  isOpenAdd: boolean
  isOpenEdit: boolean
  handleOpenAdd: () => void
  handleCloseAdd: () => void
  handleOpenEdit: (id: string | number) => void
  handleCloseEdit: () => void
  orderStatus: TOrderStatus[]
  handleAddStatus: (e: React.FormEvent<HTMLInputElement>) => void
  handleEditStatus: (e: React.FormEvent<HTMLInputElement>) => void
  addStatus: string
  editStatus: string
}
