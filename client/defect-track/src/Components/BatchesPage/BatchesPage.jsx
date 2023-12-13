import React from 'react';
import Grid from '@mui/material/Grid';
import BatchCard from './BatchCard';
import { Container, CircularProgress, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBatches } from '../../Redux/slices/batches'; // Исправлена опечатка здесь
import { Link } from 'react-router-dom';

const BatchesPage = () => {
    const dispatch = useDispatch();
    const { batches } = useSelector(state => state.batches);

    const isBatchesLoading = batches.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchBatches()); // Исправлена опечатка здесь
    }, [dispatch]);

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Button variant="contained">
            <Link to={'/create-batch'} style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit', width: '100%' }}>
                    Добавить партию
                </Link>
            </Button>
            <Grid container spacing={2}>
                {isBatchesLoading ? 
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <CircularProgress />
                    </Grid>
                :
                    batches.items.map(batch => (
                        <Grid item xs={12} sm={6} md={4} key={batch._id}> 
                            <BatchCard batch={batch} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default BatchesPage;
