import { configureStore } from '@reduxjs/toolkit';
import listingSlice from '../features/state/listing/listingSlice';
import userSlice from '../features/state/user/userSlice';


const store = configureStore({
    reducer: {
        listing: listingSlice,
        user: userSlice,
    }
})

export default store;