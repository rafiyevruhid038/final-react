import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './slices/gamesSlice';
import wishlistReducer from './slices/wishlistSlice';
import slideShowReducer from './slices/slideShowSlice';
import cartReducer from './slices/cartSlice'; // Change this line
export const store = configureStore({
  reducer: {
    games: gamesReducer,
    slideShow: slideShowReducer,
    wishlist: wishlistReducer,
    cart: cartReducer, // Change this line
  },
});

export default store;
