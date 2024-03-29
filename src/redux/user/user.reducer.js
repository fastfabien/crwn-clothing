import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null 
}

export const userSlice = createSlice({
    name: "user",
    initialState: { value: INITIAL_STATE },
    reducers: {
        login: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { login } = userSlice.actions;

export default userSlice.reducer;
