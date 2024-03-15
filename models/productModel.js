import mongoose, {mongo} from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        price: {type: Number, required: true},
        category: [{type: String}],
        images: [{type: String}],
        stock: {type: Number, default: 0},
    },
    {timestamps: true}
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);