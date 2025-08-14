import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import movieReducer from "./slices/movieSlice";

export const store = configureStore({
    reducer:{
        counter:counterReducer,
        movies:movieReducer,
    }
})