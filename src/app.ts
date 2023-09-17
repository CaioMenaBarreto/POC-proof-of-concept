import express, { Express } from "express";
import "express-async-errors";
import cors from "cors";
import dotenv from "dotenv";
import clientRoute from "@/routes/clientRouter";
import { errorHandler } from "@/middlewares/errorHandler";
dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(clientRoute);
app.use(errorHandler);

const port: number = Number(process.env.PORT) | 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));