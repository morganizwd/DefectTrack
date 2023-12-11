import React from 'react';
import { Button, TextField, Paper, Typography, Container } from '@mui/material';

const RegistrationPage = () => {
  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '30px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Электронная почта"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Пароль"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Подтвердите пароль"
            type="password"
            id="confirmPassword"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
          >
            Зарегистрироваться
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegistrationPage;