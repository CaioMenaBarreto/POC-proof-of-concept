import Joi from "joi";

const createClientSchema = Joi.object({
    "firstName": Joi.string().required(),
    "lastName": Joi.string().required()
});

export default createClientSchema;