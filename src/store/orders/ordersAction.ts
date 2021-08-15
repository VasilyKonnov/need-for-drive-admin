import crud from '../../utils/api/crud'
import { setOrders, fetchOrders, removeOrders } from './ordersSlice'
import { TOrdersAction } from './ordersTypes'

export const ordersAction: TOrdersAction = {
  list: () => (dispatch) => {
    dispatch(fetchOrders())
    crud.getOrders().then((data) => {
      dispatch(setOrders(data))
    })
  },
  remove: () => (dispatch) => {
    dispatch(removeOrders())
  },
}
