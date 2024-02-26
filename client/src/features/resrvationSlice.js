import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
  total: 0,
  supplement: 'logementSimple'
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    saveReservation: (state, action) => {
      state.value = action.payload;
    },
    setTotal: (state, action) => {
      state.total = action.payload;
    },
    setSupplement: (state, action) => {
      state.supplement = action.payload;
    },
  },
});

export const { saveReservation, setTotal, setSupplement } = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer;
export default reservationReducer;
