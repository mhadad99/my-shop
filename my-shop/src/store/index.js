import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";
import { authReducer } from "./authSlice";

export const myStore = configureStore({
  reducer: {
    productSlice: productReducer,
    authSlice: authReducer,

  },
});
