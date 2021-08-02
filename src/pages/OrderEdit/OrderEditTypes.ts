import { TOrder } from '../../store/orders'

export type TOrderEditView = {
  order: TOrder | null
  city?: string | null
  point?: string | null
  status?: string | null
  rate?: string | null
  handleCity: (event: React.ChangeEvent<{ value: unknown }>) => void
  handlePoint: (event: React.ChangeEvent<{ value: unknown }>) => void
  handleOrderStatus: (event: React.ChangeEvent<{ value: unknown }>) => void
  handleRate: (event: React.ChangeEvent<{ value: unknown }>) => void
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
}
