import { createSlice } from "@reduxjs/toolkit";

export const   roomsSlice= createSlice({
 name:'roomData',
 //room number is the number of the room not the number of rooms (ex: rome number 1,room number 2,...)
 initialState:{values:[], roomsPrices:{}},
 reducers:{
    getRoomData:(state,action)=>{
        state.values=action.payload
    },
    getRoomPrices:(state,action)=>{
        state.roomsPrices=action.payload
    }
 }
})

export const { getRoomData ,getRoomPrices} = roomsSlice.actions;
 const roomsReducer=roomsSlice.reducer
export default roomsReducer