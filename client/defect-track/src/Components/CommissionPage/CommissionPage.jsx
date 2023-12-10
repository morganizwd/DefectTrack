import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import CommissionMemberCard from './CommissionMemberCard';

const CommissionPage = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const response = await fetch('commission'); // Укажите правильный URL
            const data = await response.json();
            setMembers(data);
        };

        fetchMembers();
    }, []);

    return (
        <Grid container spacing={2}>
            {members.map(member => (
                <Grid item xs={12} sm={6} md={4} key={member._id}>
                    <CommissionMemberCard member={member} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CommissionPage;