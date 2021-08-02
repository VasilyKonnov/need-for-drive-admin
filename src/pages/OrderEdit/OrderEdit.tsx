import { useEffect, useState } from 'react'
import { OrderEditView } from './OrderEditView'
import { useParams } from 'react-router-dom'
import crud from '../../utils/api/crud'
import { setOrderStatus } from '../../store/orderStatus'
import { TOrder } from '../../store/orders'

export const OrderEdit = () => {
  let paramId: { id: string } = useParams()
  const [order, setOrder] = useState<TOrder>()
  const [_city, set_City] = useState<null | string>(null)
  const [_point, set_Point] = useState<null | string>(null)
  const [_orderStatus, set_OrderStatus] = useState<null | string>(null)
  const [_rate, set_Rate] = useState<null | string>(null)

  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [selectedColor, setSelectedColor] = useState('a')
  const [isFullTank, setIsFullTank] = useState(true)
  const [isBabyChair, setIsBabyChair] = useState(true)
  const [isRightHandDrive, setIsRightHandDrive] = useState(true)

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

  const filterPassedTime = (time: any) => {
    const currentDate = new Date()
    const selectedDate = new Date(time)
    return currentDate.getTime() < selectedDate.getTime()
  }
  const filterPassedEndTime = (time: any) => {
    const currentDate = new Date()
    const selectedDate = new Date(time)
    if (startDate) {
      // @ts-ignore
      return startDate < selectedDate.getTime()
    } else {
      return currentDate.getTime() < selectedDate.getTime()
    }
  }

  useEffect(() => {
    crud.getOrder(paramId.id).then((data) => {
      setOrder(data)
    })
  }, [paramId.id])

  useEffect(() => {
    if (order) {
      console.log('order - ', order)
      set_City(order.cityId ? order.cityId.id : null)
      set_Point(order.pointId ? order.pointId.id : null)
      set_OrderStatus(order.orderStatusId ? order.orderStatusId.id : null)
      set_Rate(order.rateId ? order.rateId.id : null)
      setSelectedColor(order.color)
      setIsFullTank(order.isFullTank)
      setIsBabyChair(order.isNeedChildChair)
      setIsRightHandDrive(order.isRightWheel)
    }
  }, [order])

  return (
    <OrderEditView
      order={order ? order : null}
      handleCity={handleCity}
      handlePoint={handlePoint}
      handleOrderStatus={handleOrderStatus}
      handleRate={handleRate}
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
    />
  )
}
