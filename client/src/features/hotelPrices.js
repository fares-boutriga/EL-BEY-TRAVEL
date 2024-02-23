import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const hotelPricesSlice = createSlice({
  name: 'hotelPrices',
  initialState,
  reducers: {
    getPrices: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getPrices } = hotelPricesSlice.actions;
export default hotelPricesSlice.reducer;
