import connectMongo from "../../../utils/connectMongo";
import  bcrypt  from 'bcryptjs';
import User from "../../../models/userModel";
import userModel from "../../../models/userModel";

export default async function handler(req, res){
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method Not Allowed'});
    }

    try {
        await connectMongo();
        const {username, password, email, address} = req.body;
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = new User({
            username,
            password: hashedPassword,
            email,
            address,
        });
        const existingUser = await userModel.exists({email: email});
        if (existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }

        await newUser.save();

        return res.status(201).json({message: 'User registered successfully'})
    } catch (error) {
        console.error('Error creating user: ', error);
        return res.status(500).json({message: error});
    }
}