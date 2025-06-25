import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlist: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    getWishlistData: (state, action) => {
      const data = action.payload.data;
      const existingWishlist = JSON.parse(localStorage.getItem("AllPrd")) || [];

      const updatedWishlist = existingWishlist.map((item) => {
        if (item.id === data.id) {
          return { ...item, wishlist: !item.wishlist };
        }
        return item;
      });

      localStorage.setItem("AllPrd", JSON.stringify(updatedWishlist));

    },
    getWishlistAccessData: (state, action) => {
      const wishlist =JSON.parse(localStorage.getItem("AllPrd")) || [];
      state.wishlist =  wishlist.filter((item)=>{ return item.wishlist === true})
    },
  },
});

export const { getWishlistData, getWishlistAccessData } = wishlistSlice.actions;

export default wishlistSlice.reducer;
