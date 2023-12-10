import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { Container, Grid } from '@mui/material';

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/products');
            const data = await response.json();
            setProducts(data);
        };

        fetchProducts();
    }, []);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
            {products.map(product => (
                <Grid item xs={12} sm={6} md={4} key={product._id}>
                    <ProductCard product={product} />
                </Grid>
            ))}
            </Grid>
        </Container>
        
    );
};

export default ProductPage;