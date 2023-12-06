import express from 'express'; 
import mongoose from 'mongoose'; 
import multer from 'multer';

import { registerValidation, loginValidation, productCreateValidation, batchCreateValidation } from './validations.js';

import { handleValidationErrors, checkAuth } from './utils/index.js';

import { UserController, ProductsController, BatchesController } from './controllers/index.js'; 

mongoose
    .connect('mongodb://127.0.0.1:27017/MyLocalDB')
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err)); 

const app = express();

const storage = multer.diskStorage({ 
    destination: (_, __, cb) => { 
        cb(null, 'uploads') 
    }, 
    filename: (_, file, cb) => { 
        cb(null, file.originalname) 
    }, 
});

const upload = multer({ storage });

app.use(express.json()); 
app.use('/uploads', express.static('uploads')); 

app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login); 
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register); 
app.get('auth/me', checkAuth, UserController.getMe);

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

app.get('/products', ProductsController.getAll);
app.post('/products', checkAuth, productCreateValidation, handleValidationErrors, ProductsController.create);
app.get('/products/:id', ProductsController.getOne);
app.delete('/products/:id', checkAuth, ProductsController.remove);
app.patch('/products/:id', checkAuth, productCreateValidation, handleValidationErrors, ProductsController.update);

app.post('/batches', checkAuth, batchCreateValidation, handleValidationErrors, BatchesController.create);
app.get('/batches', BatchesController.getAll);

app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});