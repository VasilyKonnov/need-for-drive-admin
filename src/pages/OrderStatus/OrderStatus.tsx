import { Layout, Spinner } from '../../components'
import { OrderStatusView } from './OrderStatusView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { orderStatusSelector } from '../../store/orderStatus/orderStatusSelector'
import { orderStatusAction } from '../../store/orderStatus/orderStatusAction'
import { routes } from '../../constans/constans'
import { Redirect } from 'react-router-dom'
import crud from '../../utils/api/crud'

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
  const [editStatusId, setIsEditStatusId] = useState<string>('')

  const handleAddStatus = (e: React.FormEvent<HTMLInputElement>) => {
    setIsAddStatus(e.currentTarget.value)
  }
  const handleEditStatus = (e: React.FormEvent<HTMLInputElement>) => {
    setIsEditStatus(e.currentTarget.value)
  }
  const handleOpenEdit = (id: string) => {
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

  const addOrderStatus = () => {
    if (addStatus.length > 0) {
      crud.postOrderStatus({ name: addStatus }).then((response) => {
        if (response.status < 400) {
          dispatch(orderStatusAction.remove())
          handleCloseAdd()
        }
      })
    }
  }

  const updateOrderStatus = () => {
    if (editStatus.length > 0) {
      crud
        .putOrderStatus(editStatusId, { name: editStatus })
        .then((response) => {
          if (response.status < 400) {
            dispatch(orderStatusAction.remove())
            handleCloseEdit()
          }
        })
    }
  }

  const removeOrderStatus = () => {
    if (editStatusId.length > 0) {
      crud.deleteOrderStatus(editStatusId).then((response) => {
        if (response.status < 400) {
          dispatch(orderStatusAction.remove())
          handleCloseEdit()
        }
      })
    }
  }

  useEffect(() => {
    if (fetchingStateOrderStatus === FetchingStateTypes.none) {
      dispatch(orderStatusAction.list())
    }
  }, [dispatch, fetchingStateOrderStatus, orderStatus])

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
          addOrderStatus={addOrderStatus}
          updateOrderStatus={updateOrderStatus}
          removeOrderStatus={removeOrderStatus}
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
