import connectMongo from '../../../utils/connectMongo';
import Product from '../../../models/productModel';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        await connectMongo();

        const { q, category } = req.query;

        try {
            let queryObj = {}

            if (q) {
                queryObj.Name = { $regex: new RegExp(q, 'i')};
            }
            if (category && category !== 'All') {
                queryObj.Category = category;
            }

            const results = await Product.find(queryObj)

            res.json(results);
        } catch (error) {
            console.error('Error searching:', error);
            res.status(500).json({ error: 'An error occurred while searching' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
