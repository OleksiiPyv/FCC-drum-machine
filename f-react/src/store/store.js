import { combineReducers, configureStore } from "@reduxjs/toolkit";
import packageReducer from "./slices/packagesSlice";
import modalReducer from "./slices/modalSlice";

const rootReducer = combineReducers({
    packages: packageReducer,
    modal: modalReducer
})

export default configureStore({
    reducer: rootReducer,
})