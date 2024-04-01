'use server'

import connectMongo from "../../../utils/connectMongo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../../../models/userModel";

connectMongo();

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email: email });

        if (!user) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid Password' });
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        const token = await jwt.sign(tokenData,
            "WGLbnl0rkSxNJTLZAW+TcqeU0Adz1pBRViuoLg5szQU=",
            { expiresIn: "5d" });

        return res.status(200).json({ message: 'Login Successful', success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
