import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './slices/products';
import { batchesReducer } from './slices/batches';
import { commissionReducer } from './slices/Commission';
import { authReducer } from './slices/auth';

const store = configureStore({
    reducer: {
        products: productsReducer,
        batches: batchesReducer,
        commission: commissionReducer,
        auth: authReducer,
    }
});

export default store;