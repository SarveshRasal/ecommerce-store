export default async function handler(req, res) {
    try {
        res.setHeader('Set-Cookie', 'sessionToken=; HttpOnly, Secure, SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT');

        return res.status(200).json({ message: 'Logout Successful', success: true});
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}