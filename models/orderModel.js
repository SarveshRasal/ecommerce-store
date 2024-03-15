import mongoose, {mongo} from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema (
    {
        user: {type: Schema.Types.ObjectId, ref: "User", required: true},
        products: [
            {
                product: {type: Schema.Types.ObjectId, ref: "Product"},
                quantity: {type: Number, default: 1},
            },
        ],
        totalAmount: {type: Number, required: true},
        status: {type: String, default: "pending"},
        shippingAddress: {type: String, required: true}
    },
    {timestamps: true}
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);