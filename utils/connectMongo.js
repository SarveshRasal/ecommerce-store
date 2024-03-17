import mongoose from "mongoose";

const connectMongo = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected')
};

export default connectMongo;