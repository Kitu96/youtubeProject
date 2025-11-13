import { createSlice } from "@reduxjs/toolkit";


const navSlice = createSlice({
    name: "nav",
    initialState:{
        sidebar: true
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.sidebar =!state.sidebar;
        }
    }
})

export const {toggleSidebar} =navSlice.actions;
export default navSlice.reducer;