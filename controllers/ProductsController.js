import ProductModel from "../models/Product.js";

export const update = async (req, res) => {
    try {
        const productId = req.params.id;

        await ProductModel.updateOne(
            {
                _id: productId,
            }, 
            {
                name: req.body.name,
                description: req.body.description,
                features: req.body.features,
                user: req.userId,
                isDefected: req.body.isDefected,
            },
        );

        res.json({
            success: true,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Update attempt failed',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const productId = req.params.id; 
        
        const doc = await ProductModel.findByIdAndDelete(productId);

        if (!doc) {
            return res.status(404).json({
                message: 'Product doesn\'t exist',
            });
        }

        res.json({
            success: true,
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Remove attempt failed',
        });
    }
};

export const getOne = async (req, res) => {
    try{
        const productId = req.params.id;

        const doc = await ProductModel.findById(productId);

        if (doc) {
            res.json(doc);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Search attempt failed',
        });
    }
};

export const getAll = async (req, res) => {
    try{
        const products = await ProductModel.find().populate('user').exec();

        res.json(products);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Search attempt failed',
        });
    }
};

export const create = async (req, res) => {
    try {
        const doc = new ProductModel({
            name: req.body.name,
            description: req.body.description,
            features: req.body.features,
            user: req.userId,
            isDefected: req.body.isDefected,
        });

        const product = await doc.save();

        res.json(product);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Create attempt failed',
        });
    }
};