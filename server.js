import express from "express";
import bodyParser from "body-parser";
import path from "path";
import ejs from "ejs";
// import fs from 'fs'
import pdf from "html-pdf";
import puppeteer from "puppeteer";
const app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public"))); // Setamos que nossa engine será o ejs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "/views"));
// app.use(app);



app.get("/pdf", async (request, response) => {
  
  const { Nome, Adress, data, CEP, Entreprise, CNPJ,Represent } = request.query;
  console.log(request.query);
  const fdata=new Date(data)
  //formatando a data para pt-Br
  const FormatBR= new Intl.DateTimeFormat('pt-BR').format(fdata);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(
    `http://localhost:3333/?Nome=${Nome}&data=${FormatBR}&Adress=${Adress}&CEP=${CEP}&CNPJ=${CNPJ}&Entreprise=${Entreprise}&Represent=${Represent}&acao=Enviar`,
    {
      waitUntil: "networkidle0",
    }
  );

  const pdf = await page.pdf({
    printBackground: true,
    format: "Letter",
  });

  await browser.close();

  response.contentType("application/pdf");

  return response.send(pdf);
});
app.get("/", (request, response) => {
  
  const { Nome, Adress, data, CEP, Entreprise, CNPJ,Represent } = request.query;

  const filePath = path.join(__dirname, "views/print.ejs");
  ejs.renderFile(
    filePath,
    { Nome, Adress, data, CEP, Entreprise, CNPJ,Represent },
    (err, html) => {
      // // enviar para o navegador
      return response.send(html);
    }
  );
});
app.get("/home", (request, response) => {
  response.render("Register.ejs");
});

app.listen("3333", () => console.log("Aplication 🔥 "));
