// import { createStore, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer
    },
})

export default store;