import { TCity } from '../../store/cities'
import { TCityPoint } from '../../store/cityPoints'

export type TCitiesAndStreetsList = {
  isOpenCity: boolean
  isOpenStreet: boolean
  isEditStreet: boolean
  isEditCity: boolean
  handleOpenModalCity: () => void
  handleCloseModalCity: () => void
  handleOpenModalStreet: () => void
  handleCloseModalStreet: () => void
  handleEditStreet: () => void
  handleEditCity: () => void
  cities: TCity[]
  cityPoints: TCityPoint[]
  fetchingStateCityPoints: string
  fetchingStateCities: string
}
