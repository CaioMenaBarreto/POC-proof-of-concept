import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export async function errorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error.message === "Client already exists") {
        return res.status(httpStatus.CONFLICT).send({ error: error.message });
    }

    if (error.message === "Client not exists") {
        return res.status(httpStatus.NOT_FOUND).send({ error: error.message });
    }

    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ error: error.message });
}
