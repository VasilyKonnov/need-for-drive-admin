import { createSlice } from '@reduxjs/toolkit'
import { TRateTypes } from './rateTypesTypes'
import { FetchingStateTypes } from '../types'

const initialState: TRateTypes = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const rateTypesSlice = createSlice({
  name: 'RATES_TYPES',
  initialState,
  reducers: {
    setRateTypes: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    fetchRateTypes: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    fetchErrorRateTypes: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const {
  setRateTypes,
  fetchRateTypes,
  fetchErrorRateTypes,
} = rateTypesSlice.actions

export const rateTypesReducer = rateTypesSlice.reducer
