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

export const deleteBatch = createAsyncThunk('batches/deleteBatch', async (batchId) => {
    const response = await axios.delete(`/batches/${batchId}`);
    return response.data;
});

export const updateDefectedProducts = createAsyncThunk(
    'batches/updateDefectedProducts',
    async ({ batchId, productIds }) => {
        const response = await axios.put(`/batches/${batchId}/updateDefectedProducts`, {
            products: productIds,
        });
        return response.data;
    }
);

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
                state.batches.items.push(action.payload);
            })
            .addCase(deleteBatch.fulfilled, (state, action) => {
                state.batches.items = state.batches.items.filter(batch => batch._id !== action.payload._id);
            })
            .addCase(updateDefectedProducts.fulfilled, (state, action) => {
                const index = state.batches.items.findIndex(batch => batch._id === action.payload._id);
                if (index !== -1) {
                    state.batches.items[index] = action.payload;
                }
            });
    },
});

export const batchesReducer = batchSlice.reducer;