import { createSlice } from "@reduxjs/toolkit";

export const   rooms= createSlice({
 name:'roomData',
 //room number is the number of the room not the number of rooms (ex: rome number 1,room number 2,...)
 initialState:{value:{  roomNumber: "",roomPrice: "",nAdults: "",nKids: "",kidsAge: []}},
 reducers:{
    getRoomData:(state,action)=>{
        state.value=action.payload
    }
 }
})

 const roomsReducer=rooms.reducer
export default roomsReducer