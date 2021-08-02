import { TRate } from '../../store/rates'
import { TRateType } from '../../store/rateTypes'

export type TTariffs = {
  addRateName: string
  addRatePrice: string
  handleAddRateName: (e: React.FormEvent<HTMLInputElement>) => void
  handleAddRatePrice: (e: React.FormEvent<HTMLInputElement>) => void
  isModalRateAdd: boolean
  handleModalRateAddToggle: () => void
  isModalRateEdit: boolean
  handleModalRateEditToggle: () => void
  editRateName: string
  editRatePrice: string
  handleEditRateName: (e: React.FormEvent<HTMLInputElement>) => void
  handleEditRatePrice: (e: React.FormEvent<HTMLInputElement>) => void
  // ---
  isModalRateTypeAdd: boolean
  handleModalRateTypeAddToggle: () => void
  isModalRateTypeEdit: boolean
  handleModalRateTypeEditToggle: () => void
  addRateType: string
  editRateType: string
  addRateUnits: string
  editRateUnits: string
  handleAddRateType: (e: React.FormEvent<HTMLInputElement>) => void
  handleEditRateType: (e: React.FormEvent<HTMLInputElement>) => void
  handleAddRateUnits: (e: React.FormEvent<HTMLInputElement>) => void
  handleEditRateUnits: (e: React.FormEvent<HTMLInputElement>) => void
  // ---
  rates: TRate[]
  rateTypes: TRateType[]
  fetchingStateRates: string
  fetchingStateRateTypes: string
}
