import { body } from 'express-validator';

export const loginValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password shoud be at least 8 symbols').isLength({ min: 8 }), 
];

export const registerValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password shoud be at least 8 symbols').isLength({ min: 8 }),
    body('fullName', 'Name is too short').isLength({ min: 2 }),
    body('avatarUrl', 'Invalid url').optional().isURL(),
];

export const productCreateValidation = [
    body('name', 'Enter product\'s name').isLength({ min: 3 }).isString(),
    body('description', 'Enter product\'s descriptions').isLength({ min: 10 }).isString(),
    body('features', 'Enter product\'s features').optional().isArray(), 
    body('imageUrl', 'Invalid url').optional().isURL(),
];

export const batchCreateValidation = [
    body('name', 'Enter batch name').isLength({ min: 3 }).isString(),
    body('manufactureDate', 'Enter valid manufacture date').isISO8601().toDate(),
    body('products', 'Invalid products array').optional().isArray(),
    body('products.*', 'Invalid product ID').optional().isMongoId(),
    body('imageUrl', 'Invalid url').optional().isURL(),
    body('description', 'Enter product\'s descriptions').isLength({ min: 10 }).isString(),
]; 
export const batchUpdateValidation = [
    body('name', 'Enter batch name').optional().isLength({ min: 3 }).isString(),
    body('manufactureDate', 'Enter valid manufacture date').optional().isISO8601().toDate(),
    body('description', 'Enter product\'s descriptions').optional().isLength({ min: 10 }).isString(),
    body('imageUrl', 'Invalid url').optional().isURL(),
    body('products', 'Invalid products array').optional().isArray(),
    body('products.*', 'Invalid product ID').optional().isMongoId(),
    // Проверьте, нужно ли обновлять поле 'user'
];
