import { createSlice } from "@reduxjs/toolkit";

const toggleCartSlice = createSlice({
  name: "toggleCart",
  initialState: {
    isOpenCart: false,
  },
  reducers: {
    toggle: (state) => {
      state.isOpenCart = !state.isOpenCart;
    },
  },
});

export const { toggle } = toggleCartSlice.actions;
export default toggleCartSlice.reducer;
