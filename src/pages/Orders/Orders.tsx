import { Layout, Spinner } from '../../components'
import { OrdersView } from './OrdersView'
import { useEffect, useState } from 'react'
import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom'

import { ordersSelector } from '../../store/orders/ordersSelector'
import { ordersAction } from '../../store/orders/ordersAction'

import { citiesSelector } from '../../store/cities/citiesSelector'
import { citiesAction } from '../../store/cities/citiesAction'
import { orderStatusSelector } from '../../store/orderStatus/orderStatusSelector'
import { orderStatusAction } from '../../store/orderStatus/orderStatusAction'

import { TOrder } from '../../store/orders'
import { perPage, routes } from '../../constans/constans'
import crud from '../../utils/api/crud'

export const Orders: React.FC = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const editOrder = (id: string) => {
    history.push('/edit-order/' + id)
  }

  const [city, setCity] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(null)
  const [amountPages, setAmountPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [ordersState, setOrdersState] = useState<TOrder[]>([])
  const [ordersFiltered, setOrdersFiltered] = useState<TOrder[] | null>([])
  const [_orders, set_Orders] = useState<TOrder[]>([])
  const [alertSuccess, setAlertSuccess] = useState('')
  const [alertError, setAlertError] = useState('')

  const handlePaginationClick = (data: { selected: number }) => {
    setCurrentPage(data.selected + 1)
  }
  const { data: orders, fetchingState: fetchingStateOrders } = useSelector(
    ordersSelector,
  )
  const { data: cities, fetchingState: fetchingStateCities } = useSelector(
    citiesSelector,
  )
  const {
    data: orderStatus,
    fetchingState: fetchingStateOrderStatus,
  } = useSelector(orderStatusSelector)

  const handleCity = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCity(event.target.value as string)
  }
  const handleStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStatus(event.target.value as string)
  }
  const handleFilterOrders = () => {
    if (!status && city && city.length > 0 && ordersState.length > 0) {
      const data = ordersState.filter((order) => {
        return order.cityId && order.cityId.id === city
      })
      if (data.length > 0) {
        setOrdersFiltered(data)
      } else {
        setOrdersFiltered(null)
      }
    } else if (!city && status && status.length > 0 && orderStatus.length > 0) {
      const data = ordersState.filter((order) => {
        return order.orderStatusId && order.orderStatusId.id === status
      })
      if (data.length > 0) {
        setOrdersFiltered(data)
      } else {
        setOrdersFiltered(null)
      }
    } else if (
      city &&
      city.length > 0 &&
      status &&
      status.length > 0 &&
      orderStatus.length > 0
    ) {
      const data = ordersState.filter((order) => {
        return (
          order.cityId &&
          order.orderStatusId &&
          order.cityId.id === city &&
          order.orderStatusId.id === status
        )
      })
      if (data.length > 0) {
        setOrdersFiltered(data)
      } else {
        setOrdersFiltered(null)
      }
    } else {
      setOrdersFiltered(ordersState)
    }
  }
  const handleAlertSuccess = (message: string) => {
    setAlertSuccess(message)
    setTimeout(() => setAlertSuccess(''), 5000)
  }
  const handleAlertError = (message: string) => {
    setAlertError(message)
    setTimeout(() => setAlertError(''), 5000)
  }

  useEffect(() => {
    if (fetchingStateOrders === FetchingStateTypes.none) {
      dispatch(ordersAction.list())
    }
  }, [dispatch, fetchingStateOrders, orders])

  useEffect(() => {
    if (fetchingStateCities === FetchingStateTypes.none) {
      dispatch(citiesAction.list())
    }
  }, [dispatch, fetchingStateCities, cities])

  useEffect(() => {
    if (fetchingStateOrderStatus === FetchingStateTypes.none) {
      dispatch(orderStatusAction.list())
    }
  }, [dispatch, fetchingStateOrderStatus, orderStatus])

  useEffect(() => {
    console.log('cities ', cities)
    console.log('orderStatus ', orderStatus)
    console.log('orders ', orders)
  }, [cities, orderStatus, orders])

  useEffect(() => {
    if (orders) {
      setOrdersState(orders)
    }
  }, [orders])

  useEffect(() => {
    const lastCarIndex = currentPage * perPage
    const firstCarIndex = lastCarIndex - perPage
    if (ordersFiltered && ordersFiltered.length > 0) {
      setAmountPages(ordersFiltered.length / perPage)
      set_Orders(ordersFiltered.slice(firstCarIndex, lastCarIndex))
    } else if (!ordersFiltered) {
      set_Orders([])
    } else {
      setAmountPages(ordersState.length / perPage)
      set_Orders(ordersState.slice(firstCarIndex, lastCarIndex))
    }
  }, [currentPage, orders, ordersFiltered, ordersState])

  const removeOrder = (id: string) => {
    crud
      .deleteOrder(id)
      .then((response) => {
        if (response.status < 400) {
          handleAlertSuccess(
            `Заказ номер № ${id} успешно удалён! Сейчас мы загрузим обновлённые данные`,
          )
          dispatch(ordersAction.remove())
        } else {
          handleAlertError('Что-то пошло не так, попробуйте ещё раз!')
        }
      })
      .catch((e) => {
        handleAlertError(
          'Что-то пошло не так, проверьте соединение с интернетом!',
        )
      })
  }

  return (
    <Layout messageSuccess={alertSuccess} messageError={alertError}>
      {fetchingStateOrders === FetchingStateTypes.loading ? <Spinner /> : null}
      {fetchingStateOrders === FetchingStateTypes.success ? (
        <OrdersView
          amountPages={amountPages}
          handleCity={handleCity}
          handleStatus={handleStatus}
          cities={cities}
          orderStatus={orderStatus}
          orders={_orders}
          handlePaginationClick={handlePaginationClick}
          handleFilterOrders={handleFilterOrders}
          editOrder={editOrder}
          removeOrder={removeOrder}
        />
      ) : null}
      {fetchingStateOrders === FetchingStateTypes.failed ? (
        <Redirect to={routes.ERROR_500} />
      ) : null}
    </Layout>
  )
}
