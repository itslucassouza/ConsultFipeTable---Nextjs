import { createSlice } from "@reduxjs/toolkit"

export const brandSlice = createSlice({
    name: "brand",
    initialState: "",

    reducers: {
        addBrand: (state, action) => {
             return action.payload
        },
        resetBrand: () => ""
    }
})