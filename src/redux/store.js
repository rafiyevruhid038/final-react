import { configureStore } from '@reduxjs/toolkit';
import gamesReducer from './slices/gamesSlice';
import wishlistReducer from './slices/wishlistSlice';
import slideShowReducer from './slices/slideShowSlice';
import cartReducer from './slices/cartSlice'; 
export const store = configureStore({
  reducer: {
    games: gamesReducer,
    slideShow: slideShowReducer,
    wishlist: wishlistReducer,
    cart: cartReducer, 
  },
});

export default store;
