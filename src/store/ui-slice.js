import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "showCart",
  initialState: { isCartVisible: false },
  reducers: {
    toogle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
  },
});

export const showCartActions = showCartSlice.actions;

export default showCartSlice;
