import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ id: string; title: string; price: number }>
    ) => {
      // check if the item exists in the cart or not
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      // if the item already exists in the cart
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity++;
      }
      // if the item doesn't exists in the cart (-1)
      else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // check if the item exists in the cart or not
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );

      // delete the item from the cart completely
      if (state.items[itemIndex].quantity === 1) {
        state.items.splice(itemIndex, 1);
      }
      // decrease the item quantity
      else {
        state.items[itemIndex].quantity--;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
