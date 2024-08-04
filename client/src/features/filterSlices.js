import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    startDate: '',
    endDate: '',
    payedHotel: '',
    credit:false,
    searchInput:'',
    today:false
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterForm: (state, action) => {
            const { startDate, endDate, payedHotel,credit,today } = action.payload;
            state.startDate = startDate;
            state.endDate = endDate;
            state.payedHotel = payedHotel;
            state.credit = credit;
            state.today = today;
        },
        setSearchInput:(state,action)=>{
            state.searchInput=action.payload
        }
    },
});

export const { setFilterForm,setSearchInput } = filterSlice.actions;

const FilterReducer = filterSlice.reducer;

export default FilterReducer;
