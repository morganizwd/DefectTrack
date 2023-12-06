import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true, 
        },
        features: {
            type: Array,
            default: [],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        imageUrl: String,
    }, 
    {
        timestamps: true,
    },
); 

export default mongoose.model('Product', ProductSchema);