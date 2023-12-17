import React from 'react';
import Grid from '@mui/material/Grid';
import BatchCard from './BatchCard';
import { Container, CircularProgress, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBatches, deleteBatch } from '../../Redux/slices/batches';
import { Link } from 'react-router-dom';

const BatchesPage = () => {
    const dispatch = useDispatch();
    const { batches } = useSelector(state => state.batches);
    const [selectedBatches, setSelectedBatches] = React.useState([]);

    const isBatchesLoading = batches.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchBatches());
    }, [dispatch]);

    const handleSelectionChange = (isSelected, batchId) => {
        setSelectedBatches((prevSelected) => {
            if (isSelected) {
                return [...prevSelected, batchId];
            } else {
                return prevSelected.filter(id => id !== batchId);
            }
        });
    };

    const handleDelete = () => {
        selectedBatches.forEach(batchId => {
            dispatch(deleteBatch(batchId));
        });
        setSelectedBatches([]);
    };

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Button variant="contained">
                <Link to={'/create-batch'} style={{ textAlign: 'center', textDecoration: 'none', color: 'inherit', width: '100%' }}>
                    Добавить партию
                </Link>
            </Button>
            <Button onClick={handleDelete}>Удалить выбранные партии</Button>
            <Grid container spacing={2}>
                {isBatchesLoading ? 
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <CircularProgress />
                    </Grid>
                :
                    batches.items.map(batch => (
                        <Grid item xs={12} sm={6} md={4} key={batch._id}> 
                            <BatchCard 
                                batch={batch}
                                isSelected={selectedBatches.includes(batch._id)}
                                onSelectionChange={handleSelectionChange} 
                            />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default BatchesPage;
