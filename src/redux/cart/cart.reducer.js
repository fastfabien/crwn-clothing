import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    hidden: true 
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: { value: INITIAL_STATE },
    reducers: {
        toggleHidden: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { toggleHidden } = cartSlice.actions;

export default cartSlice.reducer;
