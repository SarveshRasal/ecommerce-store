import connectMongo from "../../utils/connectMongo";
import Product from "../../models/productModel";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            await connectMongo();
            const {name, description, price, category, images, stock} = req.body;
            const newProduct = new Product({
                name,
                description,
                price,
                category,
                images,
                stock
            });

            await newProduct.save();

            res.status(201).json({message: 'Product Added Successfully'});
        } catch (error) {
            console.error('Error adding product: ', error.message);
            res.status(500).json({error: error.message}, error.message);
        }
    } else {
        res.status(405).json({error: 'Method not allowed'});
    }
}