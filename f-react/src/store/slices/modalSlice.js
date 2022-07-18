import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: false,
    pack: {},
    error: false,
    errorMessage: '',
};

const modalSlice = createSlice({
    name: "modal",

    initialState,

    reducers: {
        open(state, action) {
            state.pack = action?.payload
            state.active = true
            state.error = false
        },

        error(state, action) {
            state.errorMessage = action?.payload
            state.error = true
        },

        close(state) {
            state.active = false
            state.error = false
        }
    },
});

export const { open, close, error } = modalSlice.actions;

export default modalSlice.reducer;
