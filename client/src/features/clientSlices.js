import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    number: '',
    observation: ''
};

export const clientSlice = createSlice({
    name: 'client',
    initialState,
    reducers: {
        setClientForm: (state, action) => {
            const { name, number, observation } = action.payload;
            state.name = name;
            state.number = number;
            state.observation = observation;
        },
    },
});

export const { setClientForm } = clientSlice.actions;

const clientReducer = clientSlice.reducer;

export default clientReducer;
