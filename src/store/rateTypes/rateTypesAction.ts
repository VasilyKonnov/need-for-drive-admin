import crud from '../../utils/api/crud'
import { setRateTypes, fetchRateTypes } from './rateTypesSlice'
import { TRateTypesAction } from './rateTypesTypes'

export const rateTypesAction: TRateTypesAction = {
  list: () => (dispatch) => {
    dispatch(fetchRateTypes())

    crud.getRateTypes().then((data) => {
      dispatch(setRateTypes(data))
    })
  },
}
