import { list } from '@vercel/blob';

export const runtime = 'edge';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const {blobs} = await list();
        return Response.json(blobs);
    }
}