
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

let createToken = function (auth, exp: string) {
    return jwt.sign(auth, process.env.SECRECT_KEY, {
        expiresIn: exp
    });
};

export function generateToken(auth, exp: string) {
    let token = createToken(auth, exp);
    return token;
}

export function verifyToken(req: Request, res: Response, next: NextFunction) {
    //get Token from header
    let tokenHeader = req.header('authorization');
    
    if (tokenHeader != null) tokenHeader = tokenHeader.split(' ')[1];
    const tokenUri = req.params.token;
    if (!tokenHeader && tokenUri) {
        //verify token
        try {
            const decode = jwt.verify(tokenUri, process.env.SECRECT_KEY);
            req.user = decode;
            next();
        } catch (err) {
            res.status(401).json({ status: 401, message: 'Unauthorized' });
        }
    } else if (tokenHeader && !tokenUri) {

        try {
            const decode = jwt.verify(tokenHeader, process.env.SECRECT_KEY);
            req.user = decode;
            next();
        } catch (err) {
            res.status(401).json({ status: 401, message: 'Unauthorized' });
        }
    } else {
        return res.status(401).json({ status: 401, message: 'Unauthorized' });
    }
}