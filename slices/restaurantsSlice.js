import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const RestaurantsSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRestaurant} = RestaurantsSlice.actions

export const selectResturant = state => state.restaurant.restaurant;

export default RestaurantsSlice.reducer