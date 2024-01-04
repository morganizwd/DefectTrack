import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios.js";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const { data } = await axios.get('/products');
    return data;
});

export const fetchProduct = createAsyncThunk('products/fetchProduct', async (productId) => {
    const { data } = await axios.get(`/products/${productId}`);
    return data;
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId) => {
    await axios.delete(`/products/${productId}`);
    return productId;
});

export const updateProduct = createAsyncThunk('products/updateProduct', async ({ productId, updateData }) => {
    const { data } = await axios.patch(`/products/${productId}`, updateData);
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
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products.items = state.products.items.filter(product => product._id !== action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                const index = state.products.items.findIndex(product => product._id === action.payload._id);
                if (index !== -1) {
                    state.products.items[index] = action.payload;
                }
            });
    },
});

export const productsReducer = productSlice.reducer;