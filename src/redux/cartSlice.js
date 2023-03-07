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
      // console.log(action.payload);
      const itemID = action.payload;
      const updatedItems = state.items.filter(
        (item) => item.data.id !== itemID
      );
      console.log(updatedItems);
      return { ...state, items: updatedItems };
    },
  },
});


export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
