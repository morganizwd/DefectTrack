import BatchModel from '../models/Batch.js';
import ProductModel from '../models/Product.js';

export const create = async (req, res) => {
    try{ 
        const doc = new BatchModel({
            name: req.body.name,
            manufactureDate: req.body.manufactureDate,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            user: req.userId,
            products: req.body.products,
            defectedProducts: req.body.defectedProducts,
        });

        const batch = await doc.save();

        res.json(batch);
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Create attempt failed',
        });
    }
};

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
};

export const getOne = async (req, res) => {
    try{
        const batchId = req.params.id;

        const doc = await BatchModel.findById(batchId);

        if (doc) {
            res.json(doc);
        } else{
            res.status(404).json({ message: 'Batch not found' });
        }
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: 'Search attempt failed',
        });
    }
};

export const remove = async (req, res) => {
    try{
        const batchId = req.params.id;

        const doc = await BatchModel.findByIdAndDelete(batchId);

        if (!doc) {
            return res.status(404).json({
                message: 'Batch doesn\'t exist',
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

export const update = async (req, res) => {
    try {
        const batchId = req.params.id;

        const updateData = {
            ...req.body,
            user: req.userId, // Проверьте, нужно ли обновлять 'user'
        };

        await BatchModel.updateOne({ _id: batchId }, { $set: updateData });

        res.json({
            success: true,
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Update attempt failed',
        });
    }
};

export const updateDefectedProducts = async (req, res) => {
    try {
        const batchId = req.params.batchId;

        const defectedProducts = await ProductModel.find({
            _id: { $in: req.body.products }, 
            isDefected: true
        }).select('_id');

        await BatchModel.updateOne(
            { _id: batchId },
            { $set: { defectedProducts: defectedProducts.map(product => product._id) } }
        );

        res.json({ success: true });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Failed to update defected products' });
    }
};