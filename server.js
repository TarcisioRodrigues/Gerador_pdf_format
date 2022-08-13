import express from "express";
import bodyParser from "body-parser";
import path from 'path'
import ejs from 'ejs'
// import fs from 'fs'
 import pdf from 'html-pdf'
import puppeteer from 'puppeteer'


const app = express();
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use('/public',express.static(path.join(__dirname,'public')))    // Setamos que nossa engine será o ejs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'/views'))
// app.use(app);


 

app.get('/pdf',async(request,response) => {
    console.log(request.query)
    const {Nome,Adress,data,CEP,Entreprise,CNPJ}=request.query
    const filePath = path.join(__dirname, "views/print.ejs")
    ejs.renderFile(filePath, { Nome,Adress,data,CEP,Entreprise,CNPJ}, (err, html) => {
       
        if(err) {
            return response.send('Erro na leitura do arquivo')
        }
    
        pdf.create(html,options)
        

        return response.send(html)
    })
   
})
app.get('/', (request, response) => {
    console.log(request.query)
    const {Nome,Adress,data,CEP,Entreprise,CNPJ}=request.query
    
    const filePath = path.join(__dirname, "views/print.ejs")
    ejs.renderFile(filePath, { Nome,Adress,data,CEP,Entreprise,CNPJ}, (err, html) => {
       
        const options = {
            format:'A4',

            }
            console.log(html)
            pdf.create(html,options).toFile('./Reports/report.pdf',(res,err)=>{
                    console.log(res)
            })
      
        // // enviar para o navegador
        return response.send(html)
        
        // return response.send(html)
    })
   
})
app.get('/home',(request,response)=>{
   
  
    response.render('Register.ejs')
    

    
})

app.listen("3333", () => console.log("Aplication 🔥 "));