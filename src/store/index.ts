import thunk from "redux-thunk";
import { rootReducers } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: rootReducers,
    middleware: [thunk],
    devTools: true,
    enhancers: []
})