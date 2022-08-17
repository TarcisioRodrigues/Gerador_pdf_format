import { Router } from "express";
import { PDFController } from "./controllers/PDFControllers";

export const routes = Router();

routes.get("/pdf", PDFController.create);
routes.get("/home", PDFController.index);
routes.get("/", (request, response) => {
  response.render("Register.ejs");
});
