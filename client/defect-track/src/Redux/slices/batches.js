import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios.js";

export const fetchBatches = createAsyncThunk('batches/fetchBathces', async () => {
    const { data } = await axios.get('/batches');
    return data;
});

export const createBatch = createAsyncThunk('batches/createBatch', async (batchData) => {
    const { data } = await axios.post('/batches', batchData);
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
            })
            .addCase(createBatch.fulfilled, (state, action) => {
                // Добавьте логику для обновления состояния
                state.batches.items.push(action.payload);
            });
    },
});

export const batchesReducer = batchSlice.reducer;