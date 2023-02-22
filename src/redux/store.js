import { configureStore } from "@reduxjs/toolkit";
import toggleCartSlice from "./toggleCartSlice";

const store = configureStore({
  reducer: {
    toggleCart: toggleCartSlice,
  },
});

export default store;
