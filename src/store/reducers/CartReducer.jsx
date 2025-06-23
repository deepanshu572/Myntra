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
    getIncrement: (state, action) => {
      let incrementId = action.payload.id;
      let incrementSize = action.payload.size;
      let newCart = JSON.parse(localStorage.getItem("cartItems"));

      const updatePrd = newCart.map((item) => {
        if (item.id === incrementId && item.size === incrementSize) {
          return {
            ...item,
            quantity: (item.quantity || 0) + 1,
          };
        }
        return item;
      });
      localStorage.setItem("cartItems", JSON.stringify(updatePrd));
      state.cart = updatePrd;
    },
    getDecrement: (state, action) => {
      let decrementId = action.payload.id;
      let decrementSize = action.payload.size;
      let newCart = JSON.parse(localStorage.getItem("cartItems"));
      const updatePrd = newCart.map((item) => {
        if (item.id === decrementId && item.size === decrementSize) {
          if (item.quantity == 1 || item.quantity <= 0) {
            alert("Remove from cart ☹")
             return null;
          } else {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
      }).filter(Boolean);
      localStorage.setItem("cartItems", JSON.stringify(updatePrd));
      state.cart = updatePrd;
      console.log("====================================");
      console.log(state.cart);
      console.log("====================================");
    },
    getDeleteAllData : (state , action) =>{
        localStorage.setItem("cartItems",JSON.stringify([]))
        state.cart = [];
    }
  },
});

export const {
  getCartData,
  getCartAccessData,
  getDeleteData,
  getIncrement,
  getDecrement,
  getDeleteAllData
} = cartSlice.actions;

export default cartSlice.reducer;
