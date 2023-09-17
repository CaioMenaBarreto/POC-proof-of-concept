import { Request, Response, NextFunction } from "express";
import Joi, { Schema } from "joi";

function schemaValidation(schema: Schema) {
    return (req: Request, res: Response, next: NextFunction) => {
        const validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            const errors = validation.error.details.map(detail => detail.message);
            return res.status(422).send({ message: errors });
        }
        next();
    };
}

export default schemaValidation;
