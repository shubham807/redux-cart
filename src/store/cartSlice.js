import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            return [...state, action.payload];
        },
        remove: (state, action) => {
            // Filter out the item with the specified ID
            return state.filter(item => item.id !== action.payload.id);
        },
    },
});

export const {add, remove} = cartSlice.actions;
export default cartSlice.reducer;