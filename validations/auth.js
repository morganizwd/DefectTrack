import { body } from 'express-validator';

export const registerValidation = [
    body('email', 'Invalid email format').isEmail(),
    body('password', 'Password shoud be at least 8 symbols').isLength({ min: 8 }),
    body('fullName', 'Name is too short').isLength({ min: 2 }),
    body('avatarUrl', 'Invalid url').optional().isURL(),
];