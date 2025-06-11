import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    getProductData: (state, action) => {
        state.products = action.payload;        
    },
  },
});

export const { getProductData } = ProductSlice.actions

export default ProductSlice.reducer;
