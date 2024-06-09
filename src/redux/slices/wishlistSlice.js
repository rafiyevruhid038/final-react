import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const game = action.payload;
      if (!state.items.find(item => item.id === game.id)) {
        state.items.push(game);
      }
    },
    removeFromWishlist(state, action) {
      const gameId = action.payload;
      state.items = state.items.filter(item => item.id !== gameId);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
