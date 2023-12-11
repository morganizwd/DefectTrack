import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { batchesReducer } from './slices/batches';
import { commissionReducer } from './slices/Commission';

const store = configureStore({
    reducer: {
        products: productsReducer,
        batches: batchesReducer,
        commission: commissionReducer,
    }
});

export default store;