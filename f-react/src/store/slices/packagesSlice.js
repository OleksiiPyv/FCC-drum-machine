import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    packagesAll: [],
    packagesToShow: [],
    error: "",
};

const packagesSlice = createSlice({
    name: "packages",

    initialState,

    reducers: {
        loading(state) {
            state.loading = true;
        },

        loaded(state, action) {
            state.loading = false;
            state.packagesAll = action.payload?.all;
            state.packagesToShow = action.payload.show;
        },

        error(state, action) {
            state.loading = false;
            state.error = action.payload.message;
        },

        search(state, action) {
            state.packagesToShow = state.packagesAll.filter(x => x.name.includes(action.payload))
        },

        paginate(state, action) {
            state.packagesToShow = action.payload;
        }
    },
});

export const { loading, loaded, error, search } = packagesSlice.actions;

export default packagesSlice.reducer;
