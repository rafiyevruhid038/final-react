import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({ // Change this line
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const game = action.payload;
      if (!state.items.find(item => item.id === game.id)) {
        state.items.push(game);
      }
    },
    removeFromCart(state, action) {
      const gameId = action.payload;
      state.items = state.items.filter(item => item.id !== gameId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer; 
