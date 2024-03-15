import connectMongo from "../../utils/connectMongo";
import User from "../../models/userModel";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectMongo();
            const {user_id, password, email, address} = req.body;
            const newUser = new User({
                user_id,
                password,
                email,
                address,
            });

            await newUser.save();

            res.status(201).json({message: 'User Created Successfully'});
        } catch (error) {
            console.error('Error creating user: ', error.message);
            res.status(500).json({error: 'Internal Server Error'});
        }
    } else {
            res.status(405).json({error: 'Method not allowed'});
        }
}