import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item: any) => item.id === action.payload.id
      );

      if (index >= 0) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice;
