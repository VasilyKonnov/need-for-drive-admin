import { Layout, Spinner } from '../../components'
import { OrderStatusView } from './OrderStatusView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { orderStatusSelector } from '../../store/orderStatus/orderStatusSelector'
import { orderStatusAction } from '../../store/orderStatus/orderStatusAction'
import { routes } from '../../constans/constans'
import { Redirect } from 'react-router-dom'

export const OrderStatus: React.FC = () => {
  const dispatch = useDispatch()
  const {
    data: orderStatus,
    fetchingState: fetchingStateOrderStatus,
  } = useSelector(orderStatusSelector)

  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const [isOpenEdit, setIsOpenEdit] = useState(false)
  const [addStatus, setIsAddStatus] = useState<string>('')
  const [editStatus, setIsEditStatus] = useState<string>('')
  const [editStatusId, setIsEditStatusId] = useState<string | number>('')

  const handleAddStatus = (e: React.FormEvent<HTMLInputElement>) => {
    setIsAddStatus(e.currentTarget.value)
  }
  const handleEditStatus = (e: React.FormEvent<HTMLInputElement>) => {
    setIsEditStatus(e.currentTarget.value)
  }
  const handleOpenEdit = (id: number | string) => {
    setIsOpenEdit(true)
    setIsEditStatusId(id)
    const status = orderStatus.find((status) => status.id === id)
    if (status) setIsEditStatus(status.name)
  }
  const handleCloseEdit = () => {
    setIsOpenEdit(false)
    setIsEditStatus('')
    setIsEditStatusId('')
  }
  const handleOpenAdd = () => {
    setIsOpenAdd(true)
  }
  const handleCloseAdd = () => {
    setIsOpenAdd(false)
    setIsAddStatus('')
  }

  useEffect(() => {
    if (fetchingStateOrderStatus === FetchingStateTypes.none) {
      dispatch(orderStatusAction.list())
    }
  }, [dispatch, fetchingStateOrderStatus, orderStatus])

  useEffect(() => {
    console.log('editStatusId - ', editStatusId)
  }, [editStatusId])

  return (
    <Layout>
      {fetchingStateOrderStatus === FetchingStateTypes.success ? (
        <OrderStatusView
          isOpenAdd={isOpenAdd}
          isOpenEdit={isOpenEdit}
          handleOpenAdd={handleOpenAdd}
          handleCloseAdd={handleCloseAdd}
          handleOpenEdit={handleOpenEdit}
          handleCloseEdit={handleCloseEdit}
          orderStatus={orderStatus}
          handleAddStatus={handleAddStatus}
          handleEditStatus={handleEditStatus}
          editStatus={editStatus}
          addStatus={addStatus}
        />
      ) : null}

      {fetchingStateOrderStatus === FetchingStateTypes.loading ? (
        <Spinner />
      ) : null}

      {fetchingStateOrderStatus === FetchingStateTypes.failed ? (
        <Redirect to={routes.ERROR_500} />
      ) : null}
    </Layout>
  )
}
