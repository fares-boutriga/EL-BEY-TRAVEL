import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  peroidIds: [],
  fares:'hhh'
};

export const Periods = createSlice({
  name: 'periods',
  initialState,
  reducers: {
    selectPeriodsId: (state, action) => {
      state.peroidIds.push(action.payload) ; 
    },
  },
});

export const { selectPeriodsId } = Periods.actions;
const periodReducer=Periods.reducer
export default periodReducer
