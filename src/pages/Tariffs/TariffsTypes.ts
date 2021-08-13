import { TRate } from '../../store/rates'
import { TRateType } from '../../store/rateTypes'

export type TTariffs = {
  addRateName: string
  addRatePrice: string
  handleAddRateName: (event: React.ChangeEvent<{ value: unknown }>) => void
  handleAddRatePrice: (e: React.FormEvent<HTMLInputElement>) => void
  isModalRateAdd: boolean
  handleModalRateAddToggle: () => void
  isModalRateEdit: boolean
  handleModalRateEditToggle: () => void
  editRateName: string
  editRatePrice: string | number
  handleEditRateName: (event: React.ChangeEvent<{ value: unknown }>) => void
  handleEditRatePrice: (e: React.FormEvent<HTMLInputElement>) => void
  handleModalRateEditOpen: (
    id: number | string,
    rateTypeId?: { id: string; name: string; unit: string },
  ) => void
  addRate: () => void
  editRate: () => void
  removeRate: () => void
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
  handleModalRateTypeEditOpen: (id: number | string) => void
  addRateTypeFunc: () => void
  editRateTypeFunc: () => void
  removeRateType: () => void
  // ---
  rates: TRate[]
  rateTypes: TRateType[]
  fetchingStateRates: string
  fetchingStateRateTypes: string
}
