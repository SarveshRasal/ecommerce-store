import connectMongo from "../../../utils/connectMongo";
import  hash  from 'bcryptjs';
import {string} from "zod";

export default async function handler(req, res){
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method Not Allowed'});
    }

    const { name, email, password} = req.body;

    try {
        const db = await connectMongo();

        const existingUser = await db.collection('users').findOne({ email });
        if (existingUser) {
            return res.status(400).json({message: 'User already exists'});
        }

        const hashedPassword = await hash(password, 12);

        const newUser = {
            name,
            email,
            password: hashedPassword,
        };

        await db.collection('users').insertOne(newUser);

        return res.status(201).json({message: 'User registered successfully'})
    } catch (error) {
        console.error('Error creating user: ', error);
        return res.status(500).json({message: string(error)});
    }
}