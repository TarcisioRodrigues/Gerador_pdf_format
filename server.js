import express from "express";
import bodyParser from "body-parser";
import path from 'path'
import ejs from 'ejs'
import fs from 'fs'

import puppeteer from 'puppeteer'


const app = express();
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use('/public',express.static(path.join(__dirname,'public')))    // Setamos que nossa engine será o ejs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'/views'))
// app.use(app);
import pdf from 'html-pdf'

 const GeneratePDF=(response,request) => {
    const html = path.join(__dirname, "views/print.ejs")
    ejs.renderFile(html, (err, data) => {
        const options={
            type:'pdf',
            format:'A4',
            orientation: 'portrait'
        }
          pdf.create(data, options).toFile("./Reports/report.pdf");
      
        })
}
app.get('/pdf',GeneratePDF)
app.post('/', (request, response) => {
    console.log(request.body)
    const {Nome,Adress,data,CEP,Entreprise,CNPJ}=request.body
    console.log(Nome)
    const filePath = path.join(__dirname, "views/print.ejs")
    ejs.renderFile(filePath, { Nome,Adress,data,CEP,Entreprise,CNPJ}, (err, html) => {
        
        if(err) {
            return response.send('Erro na leitura do arquivo')
        }
    
        // enviar para o navegador
        return response.send(html)
    })
   
})
app.post('/home',(request,response)=>{
   
  
    response.render('Register.ejs')
    

    
})

app.listen("3333", () => console.log("Aplication 🔥 "));