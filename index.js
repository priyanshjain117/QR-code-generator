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
app.use('/images', express.static(path.join(__dirname, 'public/images')));//imp

app.use(express.json());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'))
let withQr=false;
app.get("/",(req,res)=>{
  if(withQr){
    res.render("home",{
      image: withQr
    })
  }else{
    res.render("home");
  }
});


// //for local host:
// app.post("/qr-generate",(req,res)=>{
//   const {url,check}=req.body;
//   if (url) {
    
//       var qr_png = qr.image(url);
//       const filePath = path.join(__dirname, 'public/images/QR_code.png');

//       qr_png.pipe(fs.createWriteStream(filePath))
//       .on('finish', () => {
//           withQr = true;
//           res.redirect("/");
//           console.log('QR code saved to ' + filePath);
//       })
//       .on('error', (err) => {
//           console.error('Error saving QR code:', err);
//           res.redirect("/");
//       });

//   } else {
//     res.redirect("/");
//   }

// });

//for vercel deployment:
app.post("/qr-generate", (req, res) => {
  const { url } = req.body;
  if (url) {
    var qr_svg = qr.imageSync(url, { type: 'png' });//binary-data
    const base64Image = Buffer.from(qr_svg).toString('base64');//converts binary data of img into base64 string format
    const imageSrc = `data:image/png;base64,${base64Image}`; //This step creates an inline data URI. A data URI allows you to embed the image directly in an HTML document as a string, rather than loading it from a file.

    res.render("home", {
      image: imageSrc
    });
  } else {
    res.redirect("/");
  }
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