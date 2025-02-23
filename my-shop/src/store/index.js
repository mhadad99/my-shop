import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";
import { productReducer } from "./productSlice";
import { useReducer } from "react";
import { userReducer } from "./userSlice";
import { authReducer } from "./authSlice";

export const myStore = configureStore({
  reducer: {
    counterSlice: counterReducer,
    productSlice: productReducer,
    userSlice: userReducer,
    authSlice: authReducer,

  },
});
