import { configureStore } from '@reduxjs/toolkit';
import listingSlice from '../features/state/listing/listingSlice';
import userSlice from '../features/state/user/userSlice';
import wishlistSlice from '../features/state/wishlist/wishlistSlice';
import modalSlice from '../features/state/modal/modalSlice';


const store = configureStore({
    reducer: {
        listing: listingSlice,
        user: userSlice,
        wishlist: wishlistSlice,
        modal: modalSlice
    }
})

export default store;