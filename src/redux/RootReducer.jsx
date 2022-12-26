import { combineReducers } from "@reduxjs/toolkit";

// Slice
import HomeSlice from "../views/home/redux";

// combind
const RootReducer = combineReducers({
    home: HomeSlice,
});


export default RootReducer