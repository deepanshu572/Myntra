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
    getDeleteData: (state, action) => {
      console.log(action.payload);
      let delItem = action.payload;
      let newCart = JSON.parse(localStorage.getItem("cartItems"));

      const newData = newCart.filter((item) => {
        return !(item.id === delItem.id && item.size === delItem.size);
      });

      console.log(newData);

      localStorage.setItem("cartItems", JSON.stringify(newData));
      state.cart = JSON.parse(localStorage.getItem("cartItems"));
    },
  },
});

export const { getCartData, getCartAccessData, getDeleteData } =
  cartSlice.actions;

export default cartSlice.reducer;
