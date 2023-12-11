import React from 'react';
import { Container, Typography, Paper, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <Container maxWidth="lg">
            <Paper style={{ padding: '20px', marginTop: '20px', textAlign: 'center' }}>
                <Typography variant="h3" gutterBottom>
                    Добро пожаловать в систему учета брака
                </Typography>
                <Typography variant="body1" paragraph>
                    Приветствуем в нашем приложении, созданном для оптимизации учета брака на вашем предприятии.
                </Typography>
                <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                    <Link to='/about' style={{ textDecoration: 'none', color: 'inherit' }}>
                        Узнать больше
                    </Link>
                </Button>
            </Paper>

            <Grid container spacing={3} style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Быстрый Старт
                            </Typography>
                            <Typography variant="body2" component="p">
                                Начните работу с нашим приложением в несколько кликов.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Подробнее</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Надежность
                            </Typography>
                            <Typography variant="body2" component="p">
                                Ваши данные в безопасности и всегда доступны.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Подробнее</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Поддержка
                            </Typography>
                            <Typography variant="body2" component="p">
                                Круглосуточная поддержка для всех пользователей.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Подробнее</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;