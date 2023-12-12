import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CommissionMemberCard = ({ member }) => {
    return (
        <Card sx={{ 
            maxWidth: 345, 
            '&:hover': {
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', // Эффект тени при наведении
              transform: 'scale(1.03)', // Немного увеличиваем карточку
              transition: 'transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out' // Плавный переход
            }
          }}
          >
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