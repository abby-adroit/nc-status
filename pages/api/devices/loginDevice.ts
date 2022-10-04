import { NextApiRequest, NextApiResponse } from 'next';
import { sign } from 'jsonwebtoken';
import { secret } from '../../../src/secret';
import cookie from 'cookie';

export default async function loginUser(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === 'POST'){
        const claims = {sub: 1, myUsername: "ward24SGH", myRole: "display"};
        const jwt = sign(
            claims, 
            secret,
            {expiresIn: '24h'}
        );
        res.setHeader('Set-Cookie', cookie.serialize('auth',jwt, {
            httpOnly: true,
            sameSite: 'strict',
            maxAge: 86400, //Expiry
            path: '/'
        }))
        res.json({id: 1});
    }else{
        console.log("method should be POST")
        res.status(405).json({id: 0});
    }
} 
