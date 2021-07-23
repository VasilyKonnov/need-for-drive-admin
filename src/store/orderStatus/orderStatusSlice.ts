import { createSlice } from '@reduxjs/toolkit'
import { TOrderStatuses } from './orderStatusTypes'
import { FetchingStateTypes } from '../types'

const initialState: TOrderStatuses = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const orderStatusSlice = createSlice({
  name: 'RATES_TYPES',
  initialState,
  reducers: {
    setOrderStatus: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    fetchOrderStatus: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    fetchErrorOrderStatus: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const {
  setOrderStatus,
  fetchOrderStatus,
  fetchErrorOrderStatus,
} = orderStatusSlice.actions

export const orderStatusReducer = orderStatusSlice.reducer
