import express from "express";
import bodyParser from "body-parser";
import path from "path";
// import fs from 'fs'
 
import cors from "cors";
import { routes } from "./routes";
const app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public"))); // Setamos que nossa engine será o ejs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "'./src/views'"));
// app.use(app);

app.use(cors());

app.use(routes);
app.listen("3333", () => console.log("Aplication 🔥 "));
