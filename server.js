import express from "express";
import bodyParser from "body-parser";
import path from 'path'
import ejs from 'ejs'
import puppeteer from 'puppeteer'


const app = express();
app.engine('html',require('ejs').renderFile)
app.set('view engine', 'ejs')
app.use('/public',express.static(path.join(__dirname,'public')))    // Setamos que nossa engine será o ejs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views',path.join(__dirname,'/views'))
// app.use(app);
const passengers = [
    {
        name: "Joyce",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Brock",
        flightNumber: 7859,
        time: "18h00",
    },
    {
        name: "Eve",
        flightNumber: 7859,
        time: "18h00",
    },
];

app.post('/pdf', async(request, response) => {


    const browser = await puppeteer.launch()
    const page = await browser.newPage()

    await page.goto('http://localhost:3333/', {
        waitUntil: 'networkidle0'
    })

    const pdf = await page.pdf({
        printBackground: true,
        format: 'Letter'
    })

    await browser.close()

    response.contentType("application/pdf")

    return response.send(pdf)

})
app.post('/', (request, response) => {
    console.log(request.body)
    const {}=request.body
    const filePath = path.join(__dirname, "views/print.ejs")
    ejs.renderFile(filePath, { passengers}, (err, html) => {
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