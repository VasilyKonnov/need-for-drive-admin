import { TCity } from '../../store/cities'
import { TCityPoint } from '../../store/cityPoints'
import { TOrder } from '../../store/orders'
import { TOrderStatus } from '../../store/orderStatus'
import { TRate } from '../../store/rates'

export type TOrderEditView = {
  order: TOrder | null
  handleCity: (event: React.ChangeEvent<{ value: unknown }>) => void
  handlePoint: (event: React.ChangeEvent<{ value: unknown }>) => void
  handleOrderStatus: (event: React.ChangeEvent<{ value: unknown }>) => void
  handleRate: (event: React.ChangeEvent<{ value: unknown }>) => void
  startDate: number | null
  endDate: number | null
  setEndDate: (val: any) => void
  setStartDate: (val: any) => void
  filterPassedEndTime: (time: any) => boolean
  filterPassedTime: (time: any) => boolean
  selectedColor: string
  handleRadioButton: (event: React.ChangeEvent<HTMLInputElement>) => void
  isFullTank: boolean
  handleTank: (event: React.ChangeEvent<HTMLInputElement>) => void
  isBabyChair: boolean
  handleBabyChair: (event: React.ChangeEvent<HTMLInputElement>) => void
  isRightHandDrive: boolean
  handleRightHandDrive: (event: React.ChangeEvent<HTMLInputElement>) => void
  goBack: () => void
  set_Price: (val: number | null) => void
  cities: TCity[]
  cityPoints: TCityPoint[]
  rates: TRate[]
  orderStatuses: TOrderStatus[]
  rate: TRate | undefined
  isSubmitDisable: boolean
  editOrder: () => void
}
