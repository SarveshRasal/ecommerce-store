'use server'

import connectMongo from "../../../utils/connectMongo";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../../../models/userModel";
import { getCookies, setCookie } from "cookies-next";
import {cookies} from "next/headers";

connectMongo();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
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

        const token = await jwt.sign(tokenData, "WGLbnl0rkSxNJTLZAW+TcqeU0Adz1pBRViuoLg5szQU=", { expiresIn: "5d" });

        console.log(token)
        console.log('Response Headers: ', res.getHeaders());

        res.setHeader('Set-Cookie', `sessionToken=${token}; HttpOnly; Secure; SameSite=Strict`);

        return res.status(200).json({ message: 'Login Successful', success: true });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
