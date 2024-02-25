import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
  total:0,
  supplement:'logementSimple'
};

export const resrvationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    saveResevation: (state, action) => {
      state.value = action.payload;
    },
    setTotal:(state,action)=>{
        state.total=action.payload
    },
    setSupplement: (state, action) => {
      state.supplement = action.payload;
    },
  },
});

export const { saveResevation,setTotal,setSupplement } = resrvationSlice.actions;
 const reservationReducer= resrvationSlice.reducer;
export default reservationReducer
