import { TCity } from '../../store/cities'
import { TCityPoint } from '../../store/cityPoints'

export type TCitiesAndStreetsList = {
  isCityAdd: boolean
  toggleModalCityAdd: () => void
  cityAdd: string
  handleCityAdd: (e: React.FormEvent<HTMLInputElement>) => void
  addCityFunc: () => void
  editCityFunc: () => void
  removeCityFunc: () => void
  // ---
  isCityEdit: boolean
  toggleModalCityEdit: () => void
  cityEdit: string
  handleCityEdit: (e: React.FormEvent<HTMLInputElement>) => void
  openModalCityEdit: (id: string) => void
  // ---
  isStreetAdd: boolean
  toggleModalStreetAdd: () => void
  handlePointCityAdd: (event: React.ChangeEvent<{ value: unknown }>) => void
  pointCityAdd: string
  handlePointStreetAdd: (e: React.FormEvent<HTMLInputElement>) => void
  pointStreetAdd: string
  handlePointAdd: (e: React.FormEvent<HTMLInputElement>) => void
  pointAdd: string
  addCityPointFunc: () => void
  editCityPointFunc: () => void
  removeCityPointFunc: () => void
  // ---
  isStreetEdit: boolean
  toggleModalStreetEdit: () => void
  handlePointCityEdit: (event: React.ChangeEvent<{ value: unknown }>) => void
  pointCityEdit: string
  handlePointStreetEdit: (e: React.FormEvent<HTMLInputElement>) => void
  pointStreetEdit: string
  handlePointEdit: (e: React.FormEvent<HTMLInputElement>) => void
  pointEdit: string
  openModalStreetEdit: (id: string) => void
  // ---
  cities: TCity[]
  cityPoints: TCityPoint[]
  fetchingStateCityPoints: string
  fetchingStateCities: string
}
