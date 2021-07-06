import { Layout } from '../../components'
import { OrderStatusView } from './OrderStatusView'
import { useState } from 'react'
import styles from './OrderStatus.module.scss'

export const OrderStatus: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
    setIsEdit(false)
  }
  const handleEdit = () => {
    setIsEdit(true)
    setIsOpen(true)
  }
  return (
    <Layout>
      <OrderStatusView
        isOpen={isOpen}
        isEdit={isEdit}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleEdit={handleEdit}
      />
    </Layout>
  )
}
