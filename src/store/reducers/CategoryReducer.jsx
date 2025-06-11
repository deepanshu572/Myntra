import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   category: [],
};

export const cartSlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoryData: (state, action) => {
     state.category = action.payload;
     
    },
  },
});

export const { getCategoryData } = cartSlice.actions

export default cartSlice.reducer;
