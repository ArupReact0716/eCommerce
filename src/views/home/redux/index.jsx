import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Feature Product
export const featureProduct = createAsyncThunk(
    "home/featureProduct",
    async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products");
            return response.data;
        } catch (error) {
            return error
        }
    }
);
// Deal Product
export const dealProduct = createAsyncThunk(
    "home/dealProduct",
    async () => {
        try {
            const response = await axios.get("https://dummyjson.com/products?limit=8&skip=10");
            return response.data;
        } catch (error) {
            return error
        }
    }
);

export const HomeSlice = createSlice({
    name: "home",
    initialState: {
        featureProducts: [],
        dealProducts: []
    },
    reducers: {},
    extraReducers: {
        // Feature Product
        [featureProduct.fulfilled]: (state, action) => {
            state.featureProducts = action.payload.products;
        },
        // Feature Product
        [dealProduct.fulfilled]: (state, action) => {
            state.dealProducts = action.payload.products;
        },
    }
});
export const { } = HomeSlice.actions
export default HomeSlice.reducer