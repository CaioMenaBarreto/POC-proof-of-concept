import { clientService } from "@/services/clientService";
import { Request, Response } from "express";
import httpStatus from "http-status";

async function createClient(req: Request, res: Response) {

    const { firstName, lastName } = req.body;
    await clientService.createClient(firstName, lastName);
    return res.sendStatus(httpStatus.CREATED);
};

async function getClients(req: Request, res: Response) {

    const clients = await clientService.getClients();
    return res.status(httpStatus.OK).send(clients);

};

async function updateClient(req: Request, res: Response) {
    const { id, firstName, lastName } = req.body;

    await clientService.updateClient(id, firstName, lastName);
    return res.sendStatus(httpStatus.OK);

};

async function deleteClient(req: Request, res: Response) {
    const { id } = req.body;
    await clientService.deleteClient(id);
    res.sendStatus(httpStatus.OK);

}

export const clientController = { createClient, getClients, updateClient, deleteClient };