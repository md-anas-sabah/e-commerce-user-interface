import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  amount: 4,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // console.log(action.payload);
      const itemID = action.payload;
      const updatedItems = state.items.filter(
        (item) => item.data.id !== itemID
      );
      console.log(updatedItems);
      return { ...state, items: updatedItems };
    },
    increase: (state, { payload }) => {
      const cartItem = state.items.find((item) => item.data.id === payload.id);
      if (cartItem.amount === undefined) {
        cartItem.amount = 1;
      } else {
        cartItem.amount = cartItem.amount + 1;
      }
      console.log(cartItem.amount);
    },
    decrease: (state, { payload }) => {
      const cartItem = state.items.find((item) => item.data.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.items.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { addItem, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
