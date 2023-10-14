import { configureStore } from '@reduxjs/toolkit';

import showCartSlice from './ui-slice';
import cartSlice from './cart-slice';

const store = configureStore({
  reducer: { showCart: showCartSlice.reducer, cart: cartSlice.reducer },
});

export default store;