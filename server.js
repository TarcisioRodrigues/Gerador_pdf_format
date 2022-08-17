import express from "express";
import bodyParser from "body-parser";
import path from "path";
import ejs from "ejs";
// import fs from 'fs'
import pdf from "html-pdf";
import puppeteer from "puppeteer";
import cors from 'cors'
const app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "public"))); // Setamos que nossa engine será o ejs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set("views", path.join(__dirname, "/views"));
// app.use(app);

app.use( cors())

app.get("/pdf", async (request, response) => {
  
  const { Nome, Adress, data, CEP, Entreprise, CNPJ,Represent,CPF } = request.query;
  
 
  console.log(typeof(data))
  let data_brasileira = data.split('-').reverse().join('/');
  console.log(data_brasileira)
  //formatando a data para pt-Br
//   const FormatBR= new Intl.DateTimeFormat('pt-BR',{year: "numeric", month: "long", day: "2-digit"}).format(data);
// console.log(FormatBR)
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  if(!Nome&&!data&&!CEP&&!Entreprise&&!CNPJ&&!Represent&&!CPF){
    response.redirect('/')
  }
  await page.goto(
    `http://localhost:3333/home/?Nome=${Nome}&data=${data_brasileira}&Adress=${Adress}&CEP=${CEP}&CNPJ=${CNPJ}&CPF=${CPF}&Entreprise=${Entreprise}&Represent=${Represent}&acao=Enviar`,
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
app.get("/home", (request, response) => {
  
  const { Nome, Adress, data, CEP, Entreprise, CNPJ,Represent,CPF } = request.query;

  const filePath = path.join(__dirname, "views/print.ejs");
  ejs.renderFile(
    filePath,
    { Nome, Adress, data, CEP, Entreprise, CNPJ,Represent,CPF },
    (err, html) => {
      // // enviar para o navegador
      return response.send(html);
    }
  );
});
app.get("/", (request, response) => {
  response.render("Register.ejs");
});

app.listen("3333", () => console.log("Aplication 🔥 "));
