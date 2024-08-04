import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theHotel: {},
};

export const hotelPricesSlice = createSlice({
  name: 'hotel',
  initialState,
  reducers: {
    selectOneHotel: (state, action) => {
      state.theHotel = action.payload
    },
  },
});

export const { selectOneHotel } = hotelPricesSlice.actions;
const hotelReducer=hotelPricesSlice.reducer
export default hotelReducer
