import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

const initialState = {
  value: {},
  theTotal: [],
  supplement: 'petitDej',
  totalAmount:null,
  daysNumber:0,
  reservationDate:{checkInDate:'',checkOutDate:''}
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {

    setTotal: (state, action) => {
      state.theTotal = action.payload;
    },
    setSupplement: (state, action) => {
      state.supplement = action.payload;
    },
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    setDaysNumber: (state, action) => {
      state.daysNumber = action.payload;
    },
    setReservatioinDate: (state, action) => {
      state.reservationDate = action.payload;
    },
  },
  
});

export const { saveReservation, setTotal, setSupplement,setTotalAmount,setDaysNumber,setReservatioinDate } = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer;
export default reservationReducer;



