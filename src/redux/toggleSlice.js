import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: {
    isOpenCart: false,
  },
  reducers: {
    toggleCart: (state) => {
      state.isOpenCart = !state.isOpenCart;
    },
  },
});

export const { toggleCart } = toggleSlice.actions;
export default toggleSlice.reducer;
