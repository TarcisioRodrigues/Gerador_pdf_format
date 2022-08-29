import { Router } from "express";
import { PDFController } from "./src/controllers/PDFControllers";

export const routes = Router();

routes.get("/pdf", PDFController.create);
routes.get("/pdf2", PDFController.create1);
routes.get("/home", PDFController.index);
routes.get("/home2", PDFController.index2);

routes.get("/", PDFController.render);
