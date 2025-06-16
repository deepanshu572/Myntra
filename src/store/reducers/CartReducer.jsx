import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCartData: (state, action) => {
      const selectedInput = action?.payload?.selectedInput;
      const product = action?.payload?.product;
      const selectedSize = selectedInput?.defaultValue;

      const updatedProduct = {
        ...product,
        size: selectedSize,
        quantity: 1,
      };

      const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

      const foundItem = existingCart.find(
        (item) =>
          item.id === updatedProduct.id && item.size === updatedProduct.size
      );

      if (foundItem) {
        alert("Product with selected size already exists in cart!");
        return;
      }

      alert("Product Added sucessfully !");
      existingCart.push(updatedProduct);
      localStorage.setItem("cartItems", JSON.stringify(existingCart));
    },
    getCartAccessData: (state, action) => {
      state.cart = JSON.parse(localStorage.getItem("cartItems"));
    },
  },
});

export const { getCartData , getCartAccessData } = cartSlice.actions;

export default cartSlice.reducer;
