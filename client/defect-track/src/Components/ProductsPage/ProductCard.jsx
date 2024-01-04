import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct, updateProduct } from '../../Redux/slices/products';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteProduct(product._id));
    };

    const handleUpdate = () => {
        const updatedProduct = { ...product, isDefected: true };
        dispatch(updateProduct({ productId: product._id, updateData: updatedProduct }));
    };
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
            <Button 
                variant="contained" 
                color="secondary" 
                onClick={handleDelete}
            >
                Удалить
            </Button>
            <Button 
                variant="contained" 
                color="primary" 
                onClick={handleUpdate}
            >
                Пометить как дефектный
            </Button>
        </Card>
    );
};

export default ProductCard;
