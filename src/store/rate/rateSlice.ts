import { createSlice } from '@reduxjs/toolkit'
import { TRate } from './rateTypes'
import { FetchingStateTypes } from '../types'

const initialState: TRate = {
  fetchingState: FetchingStateTypes.none,
  data: null,
  errorText: '',
}

const rateSlice = createSlice({
  name: 'RATE',
  initialState,
  reducers: {
    setRate: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    removeRate: (state) => {
      state.data = null
    },
  },
})

export const { setRate, removeRate } = rateSlice.actions
export const rateReducer = rateSlice.reducer
