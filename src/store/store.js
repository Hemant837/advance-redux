import { configureStore } from "@reduxjs/toolkit";

import showCartSlice from "./ui-slice";

const store = configureStore({
  reducer: { showCart: showCartSlice.reducer },
});

export default store;
