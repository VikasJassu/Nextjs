'use client'

import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type initialState = {
    name: string;
    fName: string;
    mName: string;
}

const initialState: initialState = {
    name:"",
    fName:"",
    mName:"",
}

const formSlice = createSlice({
    name:"formData",
    initialState: initialState,
    reducers:{
        updateFormData : (state, action:PayloadAction<initialState>) => {
            state.name = action.payload.name;
            state.fName = action.payload.fName;
            state.mName = action.payload.mName;
        }
    }
})

export const{updateFormData} = formSlice.actions
export default formSlice.reducer