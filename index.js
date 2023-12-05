import express from 'express'; 
import mongoose from 'mongoose'; 

import { registerValidation, loginValidation, productCreateValidation } from './validations.js';

import checkAuth from './utils/checkAuth.js';

import * as UserController from './controllers/UserController.js';
import * as ProductsController from './controllers/ProductsController.js';

mongoose
    .connect('mongodb://127.0.0.1:27017/MyLocalDB')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err)); 

const app = express();

app.use(express.json()); 

app.post('/auth/login', loginValidation, UserController.login); 
app.post('/auth/register', registerValidation, UserController.register); 
app.get('auth/me', checkAuth, UserController.getMe);

app.get('/products', ProductsController.getAll);
app.post('/products', checkAuth, productCreateValidation, ProductsController.create);
app.get('/products/:name', ProductsController.getOne);
app.delete('/products/:name', checkAuth, ProductsController.remove);
// app.patch('/products', ProductsController.update);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});