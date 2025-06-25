import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    getProductData: (state, action) => {
      const updatedPrd = action.payload.map((item) => ({
        ...item,
        wishlist: false,
      }));

      localStorage.setItem("AllPrd", JSON.stringify(updatedPrd));
    },
    getPrdData: (state, action) => {
      state.products = JSON.parse(localStorage.getItem("AllPrd"));
    },
  },
});

export const { getProductData, getPrdData } = ProductSlice.actions;

export default ProductSlice.reducer;
