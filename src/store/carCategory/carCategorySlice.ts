import { createSlice } from '@reduxjs/toolkit'
import { TCarcategories } from './carCategoryTypes'
import { FetchingStateTypes } from '../types'

const initialState: TCarcategories = {
  fetchingState: FetchingStateTypes.none,
  data: [],
  errorText: '',
}

const carCategorySlice = createSlice({
  name: 'CAR_CATEGORIES',
  initialState,
  reducers: {
    setCarCategory: (state, { payload }) => {
      state.data = payload
      state.fetchingState = FetchingStateTypes.success
    },
    fetchCarCategory: (state) => {
      state.fetchingState = FetchingStateTypes.loading
    },
    fetchErrorCarCategory: (state, { payload }) => {
      state.errorText = payload.errorText
      state.fetchingState = FetchingStateTypes.failed
    },
  },
})

export const {
  setCarCategory,
  fetchCarCategory,
  fetchErrorCarCategory,
} = carCategorySlice.actions
export const carCategoryReducer = carCategorySlice.reducer
