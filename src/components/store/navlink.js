import { createSlice } from "@reduxjs/toolkit";

export const navlinkSlice = createSlice({
    name: 'navlink',
    initialState: {clicked: -1},
    reducers:{
        setClicked(state, action) {
            state.clicked = action.payload;
        }
    }
});

export const navlinkActions = navlinkSlice.actions;

export default navlinkSlice.reducer;