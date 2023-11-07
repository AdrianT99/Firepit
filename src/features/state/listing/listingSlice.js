import { createSlice } from "@reduxjs/toolkit";
import Dummy_Listings from "../../data/ListingData";

const initialState = {
    list: Dummy_Listings
};

const listingSlice = createSlice({
    name: "listing",
    initialState: initialState,
    reducers: {

    }
})

export default listingSlice.reducer;