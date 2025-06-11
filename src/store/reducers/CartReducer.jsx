import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartData: (state, action) => {
        state.cart = JSON.parse(localStorage.getItem("cartItems"));
    },
  },
});

export const { getCartData } = cartSlice.actions

export default cartSlice.reducer;
