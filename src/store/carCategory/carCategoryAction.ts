import crud from '../../utils/api/crud'
import {
  setCarCategory,
  fetchCarCategory,
  removeCarCategory,
} from './carCategorySlice'
import { TCarCategoryAction } from './carCategoryTypes'

export const carCategoryAction: TCarCategoryAction = {
  list: () => (dispatch) => {
    dispatch(fetchCarCategory())
    crud.getCarCategories().then((data) => {
      dispatch(setCarCategory(data))
    })
  },
  remove: () => (dispatch) => {
    dispatch(removeCarCategory())
  },
}
