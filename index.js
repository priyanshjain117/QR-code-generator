import express from "express";
import bodyParser from "body-parser";
import qr from "qr-image";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'))

app.get("/",(req,res)=>{
  res.render("home");
});

app.post("/qr-generate",(req,res)=>{
  const {url}=req.body;
  var qr_png = qr.image(url);
  const filePath='/images/QR_code.png';
  qr_png.pipe(fs.createWriteStream(filePath))
    .on('finish', () => {
        console.log('QR code saved to ' + filePath);
    })
    .on('error', (err) => {
        console.error('Error saving QR code:', err);
    });
});



const start = () => {
    try {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () =>
          console.log(`Server is listening on port ${PORT} http://localhost:${PORT} .........`)
        );
    } catch (err) {
        console.log(err);
    }
  };
  
  start();