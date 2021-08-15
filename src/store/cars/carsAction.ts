import crud from '../../utils/api/crud'
import { setCars, fetchCars, removeCars } from './carsSlice'
import { TCarsAction } from './carsTypes'

export const carsAction: TCarsAction = {
  list: () => (dispatch) => {
    dispatch(fetchCars())
    crud.getCars().then((data) => {
      console.log('отработал акшен')
      dispatch(setCars(data))
    })
  },
  remove: () => (dispatch) => {
    dispatch(removeCars())
  },
}
