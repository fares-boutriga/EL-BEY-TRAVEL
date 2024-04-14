import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theHotel: [],
};

export const hotelPricesSlice = createSlice({
  name: 'hotelPrices',
  initialState,
  reducers: {
    selectOneHotel: (state, action) => {
      state.theHotel = [action.payload ]; // or use immer to update state immutably
    },
  },
});

export const { selectOneHotel } = hotelPricesSlice.actions;
const hotelReducer=hotelPricesSlice.reducer
export default hotelReducer
