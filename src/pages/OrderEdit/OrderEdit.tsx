import { useEffect, useState } from 'react'
import { OrderEditView } from './OrderEditView'
import { useParams } from 'react-router-dom'
import crud from '../../utils/api/crud'
import { TEditOrder, TOrder } from '../../store/orders'
import { useHistory } from 'react-router-dom'

import { FetchingStateTypes } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { citiesSelector } from '../../store/cities/citiesSelector'
import { citiesAction } from '../../store/cities/citiesAction'
import { cityPointsAction } from './../../store/cityPoints/cityPointsAction'
import { cityPointsSelector } from '../../store/cityPoints/cityPointsSelector'
import { ratesSelector } from '../../store/rates/ratesSelector'
import { ratesAction } from '../../store/rates/ratesAction'
import { orderStatusSelector } from '../../store/orderStatus/orderStatusSelector'
import { orderStatusAction } from '../../store/orderStatus/orderStatusAction'
import { ordersAction } from '../../store/orders/ordersAction'
import { TRate } from '../../store/rates'
import { Layout } from '../../components'

export const OrderEdit = () => {
  const paramId: { id: string } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()

  const { data: cities, fetchingState: fetchingStateCities } = useSelector(
    citiesSelector,
  )
  const { data: rates, fetchingState: fetchingStateRates } = useSelector(
    ratesSelector,
  )
  const {
    data: cityPoints,
    fetchingState: fetchingStateCityPoints,
  } = useSelector(cityPointsSelector)
  const {
    data: orderStatus,
    fetchingState: fetchingStateOrderStatus,
  } = useSelector(orderStatusSelector)

  useEffect(() => {
    if (fetchingStateCities === FetchingStateTypes.none) {
      dispatch(citiesAction.list())
    }
  }, [dispatch, fetchingStateCities, cities])
  useEffect(() => {
    if (fetchingStateCityPoints === FetchingStateTypes.none) {
      dispatch(cityPointsAction.list())
    }
  }, [dispatch, fetchingStateCityPoints, cityPoints])
  useEffect(() => {
    if (fetchingStateRates === FetchingStateTypes.none) {
      dispatch(ratesAction.list())
    }
  }, [dispatch, fetchingStateRates, rates])
  useEffect(() => {
    if (fetchingStateOrderStatus === FetchingStateTypes.none) {
      dispatch(orderStatusAction.list())
    }
  }, [dispatch, fetchingStateOrderStatus, orderStatus])

  const [order, setOrder] = useState<TOrder>()
  const [orderEdit, setOrderEdit] = useState<TEditOrder | null>(null)
  const [_city, set_City] = useState<null | string>(null)
  const [_point, set_Point] = useState<null | string>(null)
  const [_orderStatus, set_OrderStatus] = useState<null | string>(null)
  const [_rate, set_Rate] = useState<null | string>(null)

  const [startDate, setStartDate] = useState<number | null>(null)
  const [endDate, setEndDate] = useState<number | null>(null)
  const [selectedColor, setSelectedColor] = useState('a')
  const [isFullTank, setIsFullTank] = useState(true)
  const [isBabyChair, setIsBabyChair] = useState(true)
  const [isRightHandDrive, setIsRightHandDrive] = useState(true)
  const [_price, set_Price] = useState<number | null>(null)
  const [isSubmitDisable, setIsSubmitDisable] = useState(true)
  const [alertSuccess, setAlertSuccess] = useState('')
  const [alertError, setAlertError] = useState('')

  const handleCity = (event: React.ChangeEvent<{ value: unknown }>) => {
    set_City(event.target.value as string)
  }
  const handlePoint = (event: React.ChangeEvent<{ value: unknown }>) => {
    set_Point(event.target.value as string)
  }
  const handleOrderStatus = (event: React.ChangeEvent<{ value: unknown }>) => {
    set_OrderStatus(event.target.value as string)
  }
  const handleRate = (event: React.ChangeEvent<{ value: unknown }>) => {
    set_Rate(event.target.value as string)
  }

  const handleTank = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsFullTank(event.target.checked)
  }
  const handleBabyChair = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBabyChair(event.target.checked)
  }
  const handleRightHandDrive = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsRightHandDrive(event.target.checked)
  }
  const handleRadioButton = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value)
  }
  const handleAlertSuccess = (message: string) => {
    setAlertSuccess(message)
    setTimeout(() => setAlertSuccess(''), 3000)
  }
  const handleAlertError = (message: string) => {
    setAlertError(message)
    setTimeout(() => setAlertError(''), 3000)
  }
  const filterPassedTime = (time: any) => {
    return time
  }
  const filterPassedEndTime = (time: any) => {
    const currentDate = new Date()
    const selectedDate = new Date(time)
    if (startDate) {
      return startDate < selectedDate.getTime()
    } else {
      return currentDate.getTime() < selectedDate.getTime()
    }
  }

  const goBack = () => history.goBack()

  useEffect(() => {
    crud.getOrder(paramId.id).then((data) => {
      setOrder(data)
    })
  }, [paramId.id])

  useEffect(() => {
    if (order) {
      set_City(order.cityId ? order.cityId.id : null)
      set_Point(order.pointId ? order.pointId.id : null)
      set_OrderStatus(order.orderStatusId ? order.orderStatusId.id : null)
      set_Rate(order.rateId ? order.rateId.id : null)
      setSelectedColor(order.color)
      setIsFullTank(order.isFullTank)
      setIsBabyChair(order.isNeedChildChair)
      setIsRightHandDrive(order.isRightWheel)
      setStartDate(order.dateFrom)
      setEndDate(order.dateTo)
    }
  }, [order])

  useEffect(() => {
    if (
      order &&
      _city &&
      _point &&
      _orderStatus &&
      _rate &&
      selectedColor &&
      _price &&
      startDate &&
      endDate
    ) {
      setOrderEdit({
        orderStatusId: orderStatus.find((order) => order.id === _orderStatus),
        cityId: cities.find((city) => city.id === _city),
        pointId: cityPoints.find((point) => point.id === _point),
        carId: order.carId,
        color: selectedColor,
        dateFrom: startDate,
        dateTo: endDate,
        rateId: order.rateId,
        price: _price,
        isFullTank: isFullTank,
        isNeedChildChair: isBabyChair,
        isRightWheel: isRightHandDrive,
      })
      setIsSubmitDisable(false)
    } else {
      setIsSubmitDisable(true)
      setOrderEdit(null)
    }
  }, [
    _city,
    _orderStatus,
    _point,
    _price,
    _rate,
    cities,
    cityPoints,
    endDate,
    isBabyChair,
    isFullTank,
    isRightHandDrive,
    order,
    orderStatus,
    selectedColor,
    startDate,
  ])

  const editOrder = () => {
    if (orderEdit) {
      crud
        .putOrder(paramId.id, orderEdit)
        .then((response) => {
          dispatch(ordersAction.remove())
          handleAlertSuccess('Заказ изменён успешно!')
        })
        .catch((e) => {
          console.error(e)
          handleAlertError('Что-то пошло не так, попробуйте ещё раз!')
        })
    }
  }

  return (
    <Layout messageSuccess={alertSuccess} messageError={alertError}>
      <OrderEditView
        order={order ? order : null}
        handleCity={handleCity}
        handlePoint={handlePoint}
        handleOrderStatus={handleOrderStatus}
        handleRate={handleRate}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        filterPassedTime={filterPassedTime}
        filterPassedEndTime={filterPassedEndTime}
        selectedColor={selectedColor}
        handleRadioButton={handleRadioButton}
        isFullTank={isFullTank}
        handleTank={handleTank}
        isBabyChair={isBabyChair}
        handleBabyChair={handleBabyChair}
        isRightHandDrive={isRightHandDrive}
        handleRightHandDrive={handleRightHandDrive}
        goBack={goBack}
        set_Price={set_Price}
        cities={cities}
        cityPoints={cityPoints}
        rates={rates}
        orderStatuses={orderStatus}
        rate={rates.find((rate: TRate) => rate.id === _rate)}
        isSubmitDisable={isSubmitDisable}
        editOrder={editOrder}
      />
    </Layout>
  )
}
