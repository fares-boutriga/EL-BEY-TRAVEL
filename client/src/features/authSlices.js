import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    name: ''
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.name = action.payload
            state.isAuth = true;
        },
    },
});

export const { setAuth } = authSlice.actions;

const authReducer = authSlice.reducer;

export default authReducer;
