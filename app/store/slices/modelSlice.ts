import { createSlice } from "@reduxjs/toolkit"

export const modelSlice = createSlice({
    name: "model",
    initialState: "",

    reducers: {
        addModel: (state, action) => {
            return action.payload
        }, 
        resetModel: () => ""
    }
})