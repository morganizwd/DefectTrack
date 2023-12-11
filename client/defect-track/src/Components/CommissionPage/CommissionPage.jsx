import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCommission } from '../../Redux/slices/Commission';
import { Container, Grid, CircularProgress } from '@mui/material';
import CommissionMemberCard from './CommissionMemberCard';

const CommissionPage = () => {
    const dispatch = useDispatch();
    const { commission } = useSelector(state => state.commission);
    
    const isCommissionLoading = commission.status === 'loading';

    React.useEffect(() => {
        dispatch(fetchCommission());
    }, [dispatch]);

    return (
        <Container maxWidth="lg" style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Grid container spacing={2}>
                {isCommissionLoading ? 
                    <Grid item xs={12} style={{ textAlign: 'center' }}>
                        <CircularProgress />
                    </Grid>
                :
                    commission.items.map((member, index) => (
                        <Grid item xs={12} sm={6} md={4} key={member._id}>
                            <CommissionMemberCard member={member} />
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default CommissionPage;