import { createSlice } from '@reduxjs/toolkit'
import { TCityPoints } from './cityPointsTypes'
import { FetchingStateTypes } from '../types'

const initialState: TCityPoints = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const cityPointsSlice = createSlice({
  name: 'CITY_POINTS',
  initialState,
  reducers: {
    setCityPoints: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    removeCityPoints: (state) => {
      state.data = []
      state.fetchingState = FetchingStateTypes.none
    },
    fetchCityPoints: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    fetchErrorCityPoints: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const {
  setCityPoints,
  fetchCityPoints,
  fetchErrorCityPoints,
  removeCityPoints,
} = cityPointsSlice.actions
export const cityPointsReducer = cityPointsSlice.reducer
