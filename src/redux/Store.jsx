import { configureStore, compose } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

// import reducer
import RootReducer from "./RootReducer";


const Store = configureStore(
    {
        reducer: RootReducer,
        devTools: true,
        middleware: [thunk]
    },
    (window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()) ||
    compose
);

export default Store