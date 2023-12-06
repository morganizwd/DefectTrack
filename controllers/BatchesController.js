import BatchModel from '../models/Batch.js';
import Product from '../models/Product.js';

export const create = async (req, res) => {
    try{ 
        const doc = new BatchModel({
            name: req.body.name,
            manufactureDate: req.body.manufactureDate,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            user: req.userId,
            products: req.body.products,
        });

        const batch = await doc.save();

        res.json(batch);
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Create attempt failed',
        });
    }
}

export const getAll = async (req, res) => {
    try{
        const batches = await BatchModel.find().populate('user').exec();

        res.json(batches);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'Search attempt failed',
        });
    }
}