import connectMongo from "../../../utils/connectMongo";
import user from "../../../models/userModel";
import product from "../../../models/productModel";
export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            await connectMongo();
            const {userId, productId} = req.body;

            console.log(userId)

            const User = await user.findById(userId);

            if (!User) {
                return res.status(404).json({ error: 'User not found' });
            }

            // Initialize cart if not already done
            if (!User.cart) {
                User.cart = new Map();
            }

            const Product = await product.findById(productId)

            if (Product) {
                console.log(Product.name, 'Deleted from User', User.username);
                console.log(User.cart, productId)
                User.cart.delete(productId)
                await User.save();
                res.status(200).json({message: 'Product deleted from cart successfully'})
            }
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({error: error.message})
        }
    } else {
        res.status(405).json({message: "Method Not Allowed"});
    }

}