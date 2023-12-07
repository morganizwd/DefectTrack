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