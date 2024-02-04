import {configureStore} from "@reduxjs/toolkit";
import listInfoReducer from "../slices/listInfoSlice.ts";
import displayReducer from "../slices/displaySlice.ts";

const todoStore = configureStore({
    reducer: {
        listReducer: listInfoReducer,
        displayReducer: displayReducer
    }
})

export default todoStore