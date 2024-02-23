import { createSlice } from "@reduxjs/toolkit";

export const   hotelPricesSlices= createSlice({
 name:'hotelPrices',
 initialState:{value:{  logementSimple: "",petitDej: "",demiePension: "",pensionComplète: "",allInSoft: "",allIn: "",supplémentSingle: "",supplémentVueSurMer: "",supplémentSuite: ""}},
 reducers:{
    getPrices:(state,action)=>{
        state.value=action.payload
    }
 }
})

 const hotelReducer=hotelPricesSlices.reducer
export default hotelReducer