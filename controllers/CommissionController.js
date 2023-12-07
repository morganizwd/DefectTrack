import CommissionModel from '../models/Commission.js';

export const create = async (req, res) => {
    try {
        const doc = new CommissionModel({
            name: req.body.name,
            jobTitle: req.body.jobTitle,
            imageUrl: req.body.imageUrl, 
        });

        const comission = await doc.save();

        res.json(comission);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Create attempt failed',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const commissionId = req.params.id; 
        
        const doc = await CommissionModel.findByIdAndDelete(commissionId);

        if (!doc) {
            return res.status(404).json({
                message: 'Commission member doesn\'t exist',
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
        const commissionId = req.params.id;

        const doc = await CommissionModel.findById(commissionId);

        if (doc) {
            res.json(doc);
        } else {
            res.status(404).json({ message: 'Commission member not found' });
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
        const commissionMembers = await CommissionModel.find();

        res.json(commissionMembers);
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: 'Search attempt failed',
        });
    }
};

export const update = async (req, res) => {
    try {
        const commissionId = req.params.id;

        await CommissionModel.updateOne(
            {
                _id: commissionId,
            }, 
            {
                name: req.body.name,
                jobTitle: req.body.jobTitle,
                imageUrl: req.body.imageUrl, 
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