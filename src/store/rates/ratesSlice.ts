import { createSlice } from '@reduxjs/toolkit'
import { TRates } from './ratesTypes'
import { FetchingStateTypes } from '../types'

const initialState: TRates = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const ratesSlice = createSlice({
  name: 'RATES',
  initialState,
  reducers: {
    setRates: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    fetchRates: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    removeRates: (state) => {
      state.data = []
      state.fetchingState = FetchingStateTypes.none
    },
    fetchErrorRates: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const {
  setRates,
  fetchRates,
  fetchErrorRates,
  removeRates,
} = ratesSlice.actions
export const ratesReducer = ratesSlice.reducer
