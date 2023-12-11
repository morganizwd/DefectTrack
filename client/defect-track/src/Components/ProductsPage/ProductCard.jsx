import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ProductCard = ({ product }) => {
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
            {product.imageUrl && <CardMedia component="img" height="140" image={product.imageUrl} alt={product.name} />}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
                {product.features && (
                    <ul>
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    );
};

export default ProductCard;
