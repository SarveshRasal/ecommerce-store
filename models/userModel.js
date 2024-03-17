import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema (
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: true},
        cart: {type: Map, of: Number, default: {}},
        orders: {type: Array, of: Number, default: []},
        address: {type: Map, default: {}}
    },
    {timestamps: true}
);

export default mongoose.models.User || mongoose.model("User", UserSchema)