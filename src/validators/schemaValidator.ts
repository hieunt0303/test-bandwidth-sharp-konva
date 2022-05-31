const Ajv = require('ajv').default;
import { Request, Response, NextFunction } from 'express';
export default schema => (req: Request, res: Response, next: NextFunction) => {
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(req.body);
    if (!valid) {
        return res.status(400).json(validate.errors);
    }
    next();
}