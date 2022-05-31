import { Request, Response, NextFunction } from 'express';
import config from '../config'
import fs from 'fs';
import UserModel from '../models/user.model';
import { Base64 } from 'js-base64';

import { v4 as uuidv4 } from 'uuid';
import { OAuth2Client } from 'google-auth-library';
import { generateToken } from '../middlewares/auth.mdw';

const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);
const db = new UserModel()
const ZingMp3 = require("zingmp3-api-full")

export default class zingController {
    // not params
    home(req: Request, res: any, next: NextFunction) {
       res.send('hieu')
    }
   
}