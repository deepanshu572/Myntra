import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const initialState = {
  products: [],
  loading : true
};


export const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
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

export const { setLoading , getProductData, getPrdData } = ProductSlice.actions;

export default ProductSlice.reducer;
