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