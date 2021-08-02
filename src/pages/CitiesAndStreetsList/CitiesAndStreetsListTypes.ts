import { TCity } from '../../store/cities'
import { TCityPoint } from '../../store/cityPoints'

export type TCitiesAndStreetsList = {
  isCityAdd: boolean
  toggleModalCityAdd: () => void
  cityAdd: string
  handleCityAdd: (e: React.FormEvent<HTMLInputElement>) => void
  // ---
  isCityEdit: boolean
  toggleModalCityEdit: () => void
  cityEdit: string
  handleCityEdit: (e: React.FormEvent<HTMLInputElement>) => void
  // ---
  isStreetAdd: boolean
  toggleModalStreetAdd: () => void
  handlePointCityAdd: (e: React.FormEvent<HTMLInputElement>) => void
  pointCityAdd: string
  handlePointStreetAdd: (e: React.FormEvent<HTMLInputElement>) => void
  pointStreetAdd: string
  handlePointAdd: (e: React.FormEvent<HTMLInputElement>) => void
  pointAdd: string
  // ---
  isStreetEdit: boolean
  toggleModalStreetEdit: () => void
  handlePointCityEdit: (e: React.FormEvent<HTMLInputElement>) => void
  pointCityEdit: string
  handlePointStreetEdit: (e: React.FormEvent<HTMLInputElement>) => void
  pointStreetEdit: string
  handlePointEdit: (e: React.FormEvent<HTMLInputElement>) => void
  pointEdit: string
  // ---
  cities: TCity[]
  cityPoints: TCityPoint[]
  fetchingStateCityPoints: string
  fetchingStateCities: string
}
