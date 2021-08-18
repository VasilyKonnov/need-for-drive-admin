import crud from '../../utils/api/crud'
import { setCars, fetchCars, removeCars, fetchErrorCars } from './carsSlice'
import { TCarsAction } from './carsTypes'

export const carsAction: TCarsAction = {
  list: () => (dispatch) => {
    dispatch(fetchCars())
    crud
      .getCars()
      .then((data) => {
        dispatch(setCars(data))
      })
      .catch((e) => {
        console.error(e)
        dispatch(fetchErrorCars(e))
      })
  },
  remove: () => (dispatch) => {
    dispatch(removeCars())
  },
}
