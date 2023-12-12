import React from 'react';
import { Button, TextField, Paper, Typography, Container } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../../Redux/slices/auth';
import { Navigate } from 'react-router-dom';

const LoginPage = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch();
  const { 
    register, 
    handleSubmit, 
    setError, 
    formState: { errors, isValid } 
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    mode: 'onChange',
  });

  const onSubmit = (values) => {
    dispatch(fetchAuth(values))
  };

  console.log('isAuth', isAuth);

  if (isAuth) {
    return <Navigate to='/'/>;
  }

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: '30px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography component="h1" variant="h5">
          Вход
        </Typography>
        <form onSubmit={ handleSubmit(onSubmit) }> 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type='email'
            id="email"
            label="Электронная почта"
            name="email"
            autoComplete="email"
            autoFocus
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {... register('email', { required: 'Укажите почту' })}
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
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {... register('password', { required: 'Укажите пароль' })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: '10px' }}
          >
            Войти
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;