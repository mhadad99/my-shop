import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice"; // ✅ Use slices

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
