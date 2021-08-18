import crud from '../../utils/api/crud'
import {
  setOrders,
  fetchOrders,
  removeOrders,
  fetchErrorOrders,
} from './ordersSlice'
import { TOrdersAction } from './ordersTypes'

export const ordersAction: TOrdersAction = {
  list: () => (dispatch) => {
    dispatch(fetchOrders())
    crud
      .getOrders()
      .then((data) => {
        dispatch(setOrders(data))
      })
      .catch((e) => {
        console.error(e)
        dispatch(fetchErrorOrders(e))
      })
  },
  remove: () => (dispatch) => {
    dispatch(removeOrders())
  },
}
