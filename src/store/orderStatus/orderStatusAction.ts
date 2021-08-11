import crud from '../../utils/api/crud'
import {
  setOrderStatus,
  fetchOrderStatus,
  removeOrderStatus,
} from './orderStatusSlice'
import { TOrderStatusAction } from './orderStatusTypes'

export const orderStatusAction: TOrderStatusAction = {
  list: () => (dispatch) => {
    dispatch(fetchOrderStatus())

    crud.getOrderStatuses().then((data) => {
      dispatch(setOrderStatus(data))
    })
  },
  remove: () => (dispatch) => {
    dispatch(removeOrderStatus())
  },
}
