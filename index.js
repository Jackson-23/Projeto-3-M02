import express from 'express'
import { routers } from './src/routers/routers.js'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3005;
let __dirname = path.resolve(path.dirname(''))


app.use(express.urlencoded({extendend: true}));
app.use(express.json());
app.set("view engine", "ejs");
app.use(routers);
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());




//Listen
app.listen(3000,() => {
  console.log("Rodando em: localhost:3000")});

