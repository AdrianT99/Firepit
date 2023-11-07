import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishLists: [
    // {
    // id: 1,
    // name: "Beach 2023",
    // list: []
    // }
  ],
  isEmpty: true,
  currentList: 1,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialState,
  reducers: {
    addWishlistItem: (state, action) => {
      const { item } = action.payload;
      const currentWishlist = state.wishLists.find(
        (w) => w.id === state.currentList
      );

      if (currentWishlist) {
        currentWishlist.list.push(item);
        console.log(state.wishLists);
      } else {
        state.wishLists.push({
          id: state.currentList,
          name: `Wishlist ${state.currentList}`,
          list: [item],
        });
        console.log("Reducer: After adding item");
      }

      state.isEmpty = false;
    },
    removeWishlistItem: (state, action) => {
      const { wishlistId, itemId } = action.payload;
      const wishlist = state.wishLists.find((w) => w.id === wishlistId);

      if (wishlist) {
        wishlist.list = wishlist.list.filter((item) => item.id !== itemId);
        state.isEmpty = wishlist.list.length === 0;
      }
    },
  },
});

export default wishlistSlice.reducer;
export const { addWishlistItem, removeWishlistItem } = wishlistSlice.actions;
