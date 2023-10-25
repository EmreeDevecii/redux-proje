import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
    },
    removeFromCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      (state.totalQuantity -= state.cart[itemIndex]), quantity;
      state.cart.splice(itemIndex, 1);
    },
    updateQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      state.totalQuantity =
        state.totalQuantity -
        state.cart[itemIndex].quantity +
        action.payload.quantity;
      state.cart[itemIndex].quantity = action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
