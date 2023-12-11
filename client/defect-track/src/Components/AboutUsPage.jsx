import React from 'react';
import { Container, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';

const AboutUs = () => {
    return (
        <Container maxWidth="md">
            <Paper style={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h4" gutterBottom>
                    О Нас
                </Typography>
                <Typography variant="body1" paragraph>
                    Наше веб-приложение предназначено для эффективного отслеживания и управления браком в партиях товаров на предприятиях. Мы предоставляем инструменты для создания документированных актов о браках с подписями членов комиссии.
                </Typography>
                <Divider style={{ margin: '20px 0' }} />
                <Typography variant="h5" gutterBottom>
                    Ключевые Особенности
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="Отслеживание брака в партиях товаров" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Создание и управление актами о браках" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Цифровые подписи членов комиссии" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Повышение эффективности рабочих процессов" />
                    </ListItem>
                </List>
            </Paper>
        </Container>
    );
}

export default AboutUs;