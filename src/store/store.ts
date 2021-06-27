import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { userReducer } from './user'
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
