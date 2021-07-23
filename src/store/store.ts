import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { userReducer } from './user'
import { ratesReducer } from './rates'
import { rateTypesReducer } from './rateTypes'
import { orderStatusReducer } from './orderStatus'
import { citiesReducer } from './cities'
import { cityPointsReducer } from './cityPoints'
import { carCategoryReducer } from './carCategory'
import { carsReducer } from './cars'
export const store = configureStore({
  reducer: {
    user: userReducer,
    rates: ratesReducer,
    rateTypes: rateTypesReducer,
    orderStatus: orderStatusReducer,
    cities: citiesReducer,
    cityPoints: cityPointsReducer,
    carCategory: carCategoryReducer,
    cars: carsReducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
