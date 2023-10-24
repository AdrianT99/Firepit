import { configureStore } from '@reduxjs/toolkit';
import listingSlice from '../features/state/listing/listingSlice';
import userSlice from '../features/state/user/userSlice';
import wishlistSlice from '../features/state/wishlist/wishlistSlice';


const store = configureStore({
    reducer: {
        listing: listingSlice,
        user: userSlice,
        wishlist: wishlistSlice
    }
})

export default store;