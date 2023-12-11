import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BatchCard = ({ batch }) => {
    return (
        <Card 
          sx={{ 
            maxWidth: 345,
            '&:hover': {
              boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)', // Эффект тени при наведении
              transform: 'scale(1.03)', // Немного увеличиваем карточку
              transition: 'transform 0.3s ease-in-out, boxShadow 0.3s ease-in-out' // Плавный переход
            }
          }}
        >
            {batch.imageUrl && <CardMedia component="img" height="140" image={batch.imageUrl} alt={batch.name} />}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {batch.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {batch.manufactureDate}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {batch.description}
                </Typography>
                {batch.products && (
                    <ul>
                        {batch.products.map((product, index) => (
                            <li key={index}>{product}</li>
                        ))}
                    </ul>
                )}
                <Typography variant='body2' color="text.secondary">
                    ID товаров с дефектами
                </Typography>
                {batch.defectedProducts && (
                    <ul>
                        {batch.defectedProducts.map((defectedProduct, index) => (
                            <li key={index}>{defectedProduct}</li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    )
};

export default BatchCard;