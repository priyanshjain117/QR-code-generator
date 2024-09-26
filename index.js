import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'))

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