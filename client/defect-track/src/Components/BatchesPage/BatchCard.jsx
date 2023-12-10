import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BathcCard = ({ batch }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
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

export default BathcCard;