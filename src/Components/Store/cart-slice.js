import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (item) => item.itemId === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
          price: newItem.Price,
          quantity: 1,
          totalPrice: newItem.Price,
          name: newItem.title,
        }); // push changes original array in redux
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.Price;
      }
    },
    removeItemFromCart(state, action) {
      const removedItemId = action.payload;
      console.log(state.totalQuantity);
      state.totalQuantity--;
      const existingItem = state.items.find(
        (item) => item.itemId === removedItemId
      );

      if (existingItem.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.itemId !== removedItemId
        );
      } else {
        existingItem.quantity--;
      }
    },
  },
});

export const cartAcions = cartSlice.actions;

export default cartSlice;
