import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wishLists: [{
        id: 1,
        name: "Beach 2023",
        collection: "1 saved",
        list: [{
            id: 1,
            image: 'https://maramar.us/wp-content/uploads/2017/11/Santa-Teresa-Villas-Lots-for-sale-MARAMAR-inside.jpg',
            location: 'Santa Teresa, Costa Rica',
            distance: `100 kilometers away`,
            dates: 'May 15 - May 20, 2023',
            price: '$150/night',
        }]
    }]
};

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: initialState,
    reducers: {
        addWishlist: (state, action) => {
            state.wishLists.push(action.payload)
        },
    }
});

export default wishlistSlice.reducer;
export const { addWishlist } = wishlistSlice.actions;