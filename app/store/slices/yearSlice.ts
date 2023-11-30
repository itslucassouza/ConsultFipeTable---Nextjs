import { createSlice } from "@reduxjs/toolkit"

export const yearSlice = createSlice({
    name: "year",
    initialState: "",

    reducers: {
        addYear: (state, action) => {
            return action.payload
        },
        resetYear: () => ""
    }
})