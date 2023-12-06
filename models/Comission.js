import mongoose from "mongoose";

const ComissionSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        jobTitle: {
            type: String,
            required: true
        },
        imageUrl: String
    },
    {
        timestamps: true
    }
); 

export default mongoose.model('Comission', ComissionSchema);