import connectMongo from "../../../utils/connectMongo";
import user from "../../../models/userModel";
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await connectMongo();
            const {userId} = req.body;

            console.log(userId)

            const User = await user.findById(userId);

            if (!User) {
                return res.status(404).json({ error: 'User not found' });
            }

            const cart = User.cart

            return res.status(200).json(cart)
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({error: error.message})
        }
    }

}