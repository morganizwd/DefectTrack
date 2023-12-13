import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios.js";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const { data } = await axios.get('/products');
    return data;
});

export const createProduct = createAsyncThunk('products/createProduct', async (productData) => {
    const { data } = await axios.post('/products', productData);
    return data;
});

const initialState = {
    products: {
        items: [],
        status: 'loading',
    },
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.products.items = [];
                state.products.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products.items = action.payload;
                state.products.status = 'loaded';
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.products.items = [];
                state.products.status = 'error';
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                // Добавьте логику для обновления состояния
                state.products.items.push(action.payload);
            });
    },
});

export const productsReducer = productSlice.reducer;