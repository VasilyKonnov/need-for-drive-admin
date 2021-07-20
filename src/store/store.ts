import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { userReducer } from './user'
import { rateReducer } from './rate'
export const store = configureStore({
  reducer: {
    user: userReducer,
    rate: rateReducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
