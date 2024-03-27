import {createSlice } from "@reduxjs/toolkit";


const initialState={
    destinationItem:[],
}


export const destinationItemSlice=createSlice({
    name:"destinationItem",
    initialState:initialState,
    reducers:{
        setDestinationItem:(state,action)=>{
            state.destinationItem=action.payload;
        },
    },
});

export const {setDestinationItem}=destinationItemSlice.actions;
export const destinationItemReducer=destinationItemSlice.reducer;