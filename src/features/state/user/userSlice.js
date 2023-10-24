import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogged: false
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logIn: (state) => {
            state.isLogged = true;
        },
        logOut: (state) => {
            state.isLogged = false;
        }
    }
});

export default userSlice.reducer;
export const { logIn,logOut } = userSlice.actions;

