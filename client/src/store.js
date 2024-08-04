import {configureStore}from '@reduxjs/toolkit'
//import reducers
import hotelReducer from './features/hotelPrices'
import roomsReducer from './features/roomsSlice'
import reservationReducer from './features/resrvationSlice'
import periodReducer from './features/periodSlice'
import clientReducer from './features/clientSlices'
import FilterReducer from './features/filterSlices'
import authReducer from './features/authSlices'
export const store=configureStore({
    reducer:{
        hotel:hotelReducer,
        roomData:roomsReducer,
        reservation:reservationReducer,
        periods:periodReducer,
        client:clientReducer,
        filter:FilterReducer,
        auth:authReducer
    }
})