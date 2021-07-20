import { Dispatch } from 'react'

export type TRate = {
  fetchingState: string
  data: null | string[]
  errorText: string
}

export type TRateAction = {
  getRate: (token: string) => (dispatch: Dispatch<any>) => void
  remove: () => void
}
