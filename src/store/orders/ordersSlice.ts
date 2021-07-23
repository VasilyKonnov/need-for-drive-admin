import { createSlice } from '@reduxjs/toolkit'
import { TOrders } from './ordersTypes'
import { FetchingStateTypes } from '../types'

const initialState: TOrders = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const ordersSlice = createSlice({
  name: 'ORDERS',
  initialState,
  reducers: {
    setOrders: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    fetchOrders: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    fetchErrorOrders: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const { setOrders, fetchOrders, fetchErrorOrders } = ordersSlice.actions
export const ordersReducer = ordersSlice.reducer
