import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios.js";

export const fetchBatches = createAsyncThunk('batches/fetchBathces', async () => {
    const { data } = await axios.get('/batches');
    return data;
});

const initialState = {
    batches: {
        items: [],
        status: 'loading',
    },
};

const batchSlice = createSlice({
    name: 'batches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchBatches.pending, (state) => {
                state.batches.items = [];
                state.batches.status = 'loading';
            })
            .addCase(fetchBatches.fulfilled, (state, action) => {
                state.batches.items = action.payload;
                state.batches.status = 'loaded';
            })
            .addCase(fetchBatches.rejected, (state) => {
                state.batches.items = [];
                state.batches.status = 'error';
            });
    },
});

export const batchesReducer = batchSlice.reducer;