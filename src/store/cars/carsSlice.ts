import { createSlice } from '@reduxjs/toolkit'
import { TCars } from './carsTypes'
import { FetchingStateTypes } from '../types'

const initialState: TCars = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const carsSlice = createSlice({
  name: 'CARS',
  initialState,
  reducers: {
    setCars: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    removeCars: (state) => {
      state.data = []
      state.fetchingState = FetchingStateTypes.none
    },
    fetchCars: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    fetchErrorCars: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const {
  setCars,
  fetchCars,
  fetchErrorCars,
  removeCars,
} = carsSlice.actions
export const carsReducer = carsSlice.reducer
