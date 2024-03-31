import mongoose, { Document } from "mongoose";

export interface Product extends Document {
        Name: string;
        Description: string;
        Price: number;
        Category: string[];
        ImageURL: string[];
}

const ProductSchema = new mongoose.Schema({
        Name: {type: String, required: true},
        Description: {type: String, required: true},
        Price: {type: Number, required: true},
        Category: [{type: String}],
        ImageURL: [{type: String}],
});

export default mongoose.models.Product || mongoose.model<Product>("Product", ProductSchema);
