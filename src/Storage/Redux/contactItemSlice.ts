

import { createSlice } from "@reduxjs/toolkit";
import { contactModel } from "../../Interfaces";


export const emptyUserState: contactModel = {
    id:"",
    fullName: "",
    email: "",
    phoneNumber: "",
    location: "",
    additionalText: ""
};

export const contactItemSlice = createSlice({
  name: "userAuth",
  initialState: emptyUserState,
  reducers: {
    setContactUser: (state, action) => {
        state.fullName = action.payload.fullName;
        state.id = action.payload.id;
        state.phoneNumber = action.payload.phoneNumber;
        state.location = action.payload.location;
        state.email = action.payload.email;
        state.additionalText = action.payload.additionalText;

      },
  },
});

export const { setContactUser } = contactItemSlice.actions;
export const contactItemReducer = contactItemSlice.reducer;