import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";
import { authReducer } from "./authSlice";
import { cartReducer } from "./cartSlice";

export const myStore = configureStore({
  reducer: {
    productSlice: productReducer,
    authSlice: authReducer,
    cartSlice: cartReducer,
  },
});
