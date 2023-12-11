import React from 'react';
import ProductCard from './ProductCard';
import { Container, Grid, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../Redux/slices/products.js';

const ProductPage = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);

    const isProductsLoading = products.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} marginTop='20px' marginBottom='20px'>
                {isProductsLoading ? 
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <CircularProgress />
                    </Grid>
                :
                    products.items.map((product, index) => (
                        <Grid item xs={12} sm={6} md={4} key={product._id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default ProductPage;