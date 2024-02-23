import { createSlice } from "@reduxjs/toolkit";

export const   roomsSlice= createSlice({
 name:'roomData',
 //room number is the number of the room not the number of rooms (ex: rome number 1,room number 2,...)
 initialState:{values:[]},
 reducers:{
    getRoomData:(state,action)=>{
        state.values=action.payload
    }
 }
})

export const { getRoomData } = roomsSlice.actions;
 const roomsReducer=roomsSlice.reducer
export default roomsReducer