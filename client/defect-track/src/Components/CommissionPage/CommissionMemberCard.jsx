import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CommissionMemberCard = ({ member }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            {member.imageUrl && (
                <CardMedia component="img" height="140" image={member.imageUrl} alt={member.name} />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {member.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {member.jobTitle}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CommissionMemberCard;