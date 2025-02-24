// filepath: /home/haddad/Desktop/workspace/iti/react/project/my-shop/src/store/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.cartItems.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...item, quantity: 1 });
      }
      state.totalAmount += item.price;
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((i) => i.id === itemId);
      if (item) {
        state.totalAmount -= item.price * item.quantity;
        state.cartItems = state.cartItems.filter((i) => i.id !== itemId);
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;