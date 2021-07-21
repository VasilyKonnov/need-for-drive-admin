import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { userReducer } from './user'
import { ratesReducer } from './rates'
import { rateTypesReducer } from './rateTypes'
export const store = configureStore({
  reducer: {
    user: userReducer,
    rates: ratesReducer,
    rateTypes: rateTypesReducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
