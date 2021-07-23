import { Layout } from '../../components'
import { OrderStatusView } from './OrderStatusView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { orderStatusSelector } from '../../store/orderStatus/orderStatusSelector'
import { orderStatusAction } from '../../store/orderStatus/orderStatusAction'

export const OrderStatus: React.FC = () => {
  const dispatch = useDispatch()
  const {
    data: orderStatus,
    fetchingState: fetchingStateOrderStatus,
  } = useSelector(orderStatusSelector)

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

  useEffect(() => {
    if (fetchingStateOrderStatus === FetchingStateTypes.none) {
      dispatch(orderStatusAction.list())
    }
  }, [dispatch, fetchingStateOrderStatus, orderStatus])

  return (
    <Layout>
      <OrderStatusView
        isOpen={isOpen}
        isEdit={isEdit}
        handleOpen={handleOpen}
        handleClose={handleClose}
        handleEdit={handleEdit}
        orderStatus={orderStatus}
      />
    </Layout>
  )
}
