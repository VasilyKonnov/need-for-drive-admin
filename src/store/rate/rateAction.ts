import { setRate, removeRate } from './rateSlice'
import { TRateAction } from './rateTypes'

export const userAction: TRateAction = {
  getRate: (token: string) => (dispatch) => {
    dispatch(setRate(token))
  },
  remove: () => (dispatch: (arg0: any) => void) => {
    dispatch(removeRate())
  },
}
