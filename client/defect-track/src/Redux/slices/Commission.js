import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios.js";

export const fetchCommission = createAsyncThunk('commission/fetchCommission', async () => {
    const { data } = await axios.get('/commission');
    return data;
});

const initialState = {
    commission: {
        items: [],
        status: 'loading',
    },
};

const commissionSlice = createSlice({
    name: 'commission',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommission.pending, (state) => {
                state.commission.items = [];
                state.commission.status = 'loading';
            })
            .addCase(fetchCommission.fulfilled, (state, action) => {
                state.commission.items = action.payload;
                state.commission.status = 'loaded';
            })
            .addCase(fetchCommission.rejected, (state) => {
                state.commission.items = [];
                state.commission.status = 'error';
            });
    },
});

export const commissionReducer = commissionSlice.reducer;