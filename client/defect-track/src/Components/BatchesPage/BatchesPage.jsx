import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import BathcCard from './BatchCard';

const BatchesPage = () => {
    const [batches, setBatches] = useState([]);

    useEffect(() => {
        const fetchBatches = async () => {
            const response = await fetch('/batches');
            const data = await response.json();
            setBatches(data);
        };

        fetchBatches();
    }, []);

    return (
        <Grid container spacing={2}>
            {batches.map(batch => (
                <Grid item xs={12} sm={6} md={4} key={batches._id}>
                    <BathcCard batch={batch} />
                </Grid>
            ))}
        </Grid>
    );
};

export default BatchesPage;