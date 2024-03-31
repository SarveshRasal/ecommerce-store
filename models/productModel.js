import mongoose, {mongo} from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        Name: {type: String, required: true},
        Description: {type: String, required: true},
        Price: {type: Number, required: true},
        Category: [{type: String}],
        ImageURL: [{type: String}],
    },
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);