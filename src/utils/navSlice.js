import { createSlice } from "@reduxjs/toolkit";


const navSlice = createSlice({
    name: "nav",
    initialState:{
        sidebar: true
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.sidebar =!state.sidebar;
        },
        removeSidebar:(state)=>{
            state.sidebar = false;
        }
    }
})

export const {toggleSidebar,removeSidebar} =navSlice.actions;
export default navSlice.reducer;