import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/cartSlice'
import restaurantsSlice from './slices/restaurantsSlice'

export const store = configureStore({
  reducer: {
    cart:CartSlice,
    restaurant:restaurantsSlice
  },
})