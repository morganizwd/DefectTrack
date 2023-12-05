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