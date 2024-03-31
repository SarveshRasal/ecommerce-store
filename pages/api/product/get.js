import connectMongo from "../../../utils/connectMongo";
import product from "../../../models/productModel";
export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            await connectMongo();

            const Products = await product.find({})

            if (!Products) {
                return res.status(404).json({ error: 'Products not found' });
            }

            return res.status(200).json(Products)
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({error: error.message})
        }
    } else {
        res.status(405).json({message: "Method Not Allowed"});
    }

}