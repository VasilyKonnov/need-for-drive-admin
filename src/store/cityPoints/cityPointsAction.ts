import crud from '../../utils/api/crud'
import {
  setCityPoints,
  fetchCityPoints,
  removeCityPoints,
} from './cityPointsSlice'
import { TCityPointsAction } from './cityPointsTypes'

export const cityPointsAction: TCityPointsAction = {
  list: () => (dispatch) => {
    dispatch(fetchCityPoints())
    crud.getCityPoints().then((data) => {
      dispatch(setCityPoints(data))
    })
  },
  remove: () => (dispatch) => {
    dispatch(removeCityPoints())
  },
}
