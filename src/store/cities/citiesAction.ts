import crud from '../../utils/api/crud'
import { setCities, fetchCities, removeCities } from './citiesSlice'
import { TCitiesAction } from './citiesTypes'

export const citiesAction: TCitiesAction = {
  list: () => (dispatch) => {
    dispatch(fetchCities())
    crud.getCities().then((data) => {
      dispatch(setCities(data))
    })
  },
  remove: () => (dispatch) => {
    dispatch(removeCities())
  },
}
