import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './sliceCart'

export const store = configureStore({
    reducer:{
        name:  cartSlice
    }
})