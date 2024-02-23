import {configureStore}from '@reduxjs/toolkit'
//import reducers
import hotelReducer from './features/hotelPrices'
import roomsReducer from './features/roomsSlice'
export const store=configureStore({
    reducer:{
        hotelPrices:hotelReducer,
        roomData:roomsReducer
    }
})