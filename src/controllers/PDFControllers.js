import ejs from "ejs";
import puppeteer from "puppeteer";
import path from "path";

export const PDFController = {
  async create(request, response) {
    const { Nome, Adress, data, CEP, Entreprise, CNPJ, Represent, CPF } =
      request.query;

    //  console.log( data);
     let data_brasileira = data.split("-").reverse().join("/");
    // console.log(data_brasileira);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

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
  },
  async index(request, response) {
    const { Nome, Adress, data, CEP, Entreprise, CNPJ, Represent, CPF } =
      request.query;

    const filePath = path.join(__dirname, "../views/print.ejs");
    ejs.renderFile(
      filePath,
      { Nome, Adress, data, CEP, Entreprise, CNPJ, Represent, CPF },
      (err, html) => {
        // // enviar para o navegador
        return response.send(html);
      }
    );
  },
  async render(request, response) {
    const filePaths = path.join(__dirname, "../views/Register.ejs");
    response.render(filePaths);
  },
};
