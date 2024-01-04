import express from 'express'; 
import mongoose from 'mongoose'; 
import multer from 'multer';
import cors from 'cors';

import { 
    registerValidation, 
    loginValidation, 
    productCreateValidation, 
    batchCreateValidation, 
    batchUpdateValidation , 
    CommissionCreateValidation,
    CommissionUpdateValidation, 
    productUpdateValidation} from './validations.js';

import { handleValidationErrors, checkAuth } from './utils/index.js';

import { 
    UserController, 
    ProductsController, 
    BatchesController,
    CommissionController } from './controllers/index.js'; 

mongoose 
    .connect('mongodb+srv://admin:Hesus2016@cluster0.vgtv5yo.mongodb.net/DefectTrack')
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
app.use(cors());
app.use('/uploads', express.static('uploads')); 

// auth pathes 
app.post('/auth/login', loginValidation, handleValidationErrors, UserController.login); 
app.post('/auth/register', registerValidation, handleValidationErrors, UserController.register); 
app.get('/auth/me', checkAuth, UserController.getMe);

//media upload pathes
app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    });
});

//products pathes
app.get('/products', ProductsController.getAll);
app.post('/products', checkAuth, productCreateValidation, handleValidationErrors, ProductsController.create);
app.get('/products/:id', ProductsController.getOne);
app.delete('/products/:id', checkAuth, ProductsController.remove);
app.patch('/products/:id', checkAuth, productUpdateValidation, handleValidationErrors, ProductsController.update);

// batches pathes
app.post('/batches', checkAuth, batchCreateValidation, handleValidationErrors, BatchesController.create);
app.get('/batches', BatchesController.getAll);
app.put('/batches/:batchId/updateDefectedProducts', BatchesController.updateDefectedProducts);
app.get('/batches/:id', BatchesController.getOne);
app.delete('/batches/:id', checkAuth, BatchesController.remove);
app.patch('/batches/:id', checkAuth, batchUpdateValidation, handleValidationErrors, BatchesController.update);

//commission pathes
app.post('/commission', checkAuth, CommissionCreateValidation, handleValidationErrors, CommissionController.create);
app.delete('/commission/:id', checkAuth, CommissionController.remove);
app.get('/commission/:id', CommissionController.getOne);
app.get('/commission', CommissionController.getAll);
app.patch('/commission/:id', checkAuth, CommissionUpdateValidation, handleValidationErrors, CommissionController.update);


app.listen(4444, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server OK');
});