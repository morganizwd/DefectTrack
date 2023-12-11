import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { batchesReducer } from './slices/batches';

const store = configureStore({
    reducer: {
        products: productsReducer,
        batches: batchesReducer,
    }
});

export default store;