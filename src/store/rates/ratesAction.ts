import crud from '../../utils/api/crud'
import { setRates, fetchRates } from './ratesSlice'
import { TRatesAction } from './ratesTypes'

export const ratesAction: TRatesAction = {
  list: () => (dispatch) => {
    dispatch(fetchRates())

    crud.getRates().then((data) => {
      dispatch(setRates(data))
    })
  },
}
