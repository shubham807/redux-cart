import { configureStore } from "@reduxjs/toolkit";
import './cartSlice';
import cartSlice from "./cartSlice";

export const store = configureStore({
    reducer: {
       cart: cartSlice,
    }
});

export default store;