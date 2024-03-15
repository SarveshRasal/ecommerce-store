import connectMongo from "../../utils/connectMongo";
import Test from "../../models/testModel";

connectMongo();

export default async (req, res) => {
    try {
        const newTestDoc = new Test({
            name: 'John Doe',
            email: 'john@sucks'
        });

        await newTestDoc.save();

        res.status(200).json({message:'Document Added Successfully'});
    } catch (error) {
        console.error('Error adding document: ', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};