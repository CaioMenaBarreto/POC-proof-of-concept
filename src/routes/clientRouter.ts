import { clientController } from "@/controllers/clientController";
import schemaValidation from "@/middlewares/schemaValidation";
import createClientSchema from "@/schemas/createClientSchema";
import { Router } from "express";

const clientRoute = Router();

clientRoute.post("/client", schemaValidation(createClientSchema), clientController.createClient);
clientRoute.get("/client", clientController.getClients);
clientRoute.put("/client", clientController.updateClient);
clientRoute.delete("/client", clientController.deleteClient);

export default clientRoute;