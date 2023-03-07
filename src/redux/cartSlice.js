import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    amount: 1,
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemID = action.payload;
      state.items = state.items.filter((item) => item.id !== itemID);
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
