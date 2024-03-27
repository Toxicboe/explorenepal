import {createSlice } from "@reduxjs/toolkit";
import {UserModel} from '../../Interfaces'


const initialState:UserModel={
  id:"",
  userName:"",
  email:"",
  password:"",
  confirmPassword:"",
  firstName:"",
  lastName:"",
  location:"",
  phoneNumber:""
}


export const userAuthSlice=createSlice({
    name:"userAuth",
    initialState:initialState,
    reducers:{
        setLoggedInUser:(state,action)=>{
            state.id=action.payload.id;
            state.firstName=action.payload.firstName;
            state.lastName=action.payload.lastName;
            state.email=action.payload.email;
            state.userName=action.payload.userName;
            state.password=action.payload.password;
            state.confirmPassword=action.payload.confirmPassword;
            state.location=action.payload.location;
        },
    },
});

export const {setLoggedInUser}=userAuthSlice.actions;
export const userAuthReducer=userAuthSlice.reducer;