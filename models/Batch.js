import mongoose from "mongoose";

const BatchSchema = new mongoose.Schema(
    {
        // Добавьте сюда свои поля, например:
        name: {
            type: String,
            required: true
        },
        manufactureDate: {
            type: Date,
            required: true
        }, 
        description: {
            type: String,
            required: true, 
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        }, 
        imageUrl: String, 
            products: [ 
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product'
                }
            ],
        defectedProducts: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }],
    },
    {
    timestamps: true 
    });

export default mongoose.model('Batch', BatchSchema);