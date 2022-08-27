import { Router } from "express";
import { PDFController } from "./src/controllers/PDFControllers";


export const routes = Router();

routes.get("/pdf", PDFController.create);
routes.get("/home", PDFController.index);
routes.get("/", PDFController.render);
