import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { brandSlice } from "./slices/brandSlice";
import { modelSlice } from "./slices/modelSlice";
import { yearSlice } from "./slices/yearSlice";

export const store = configureStore({
    reducer: {
        brand: brandSlice.reducer,
        model: modelSlice.reducer,
        year: yearSlice.reducer,
    }
})

export const { addBrand, resetBrand } = brandSlice.actions
export const { addModel, resetModel } = modelSlice.actions
export const { addYear, resetYear } = yearSlice.actions

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector