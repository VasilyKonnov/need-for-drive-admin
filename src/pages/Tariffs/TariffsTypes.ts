import { TRate } from '../../store/rates'
import { TRateType } from '../../store/rateTypes'

export type TTariffs = {
  isModalRate: boolean
  isModalRateType: boolean
  isEditRate: boolean
  isEditRateType: boolean
  handleModalRateOpen: () => void
  handleModalRateClose: () => void
  handleModalRateTypeOpen: () => void
  handleModalRateTypeClose: () => void
  handleEditRate: () => void
  handleEditRateType: () => void
  rates: TRate[]
  rateTypes: TRateType[]
  fetchingStateRates: string
  fetchingStateRateTypes: string
}
