import express from 'express'
import { getindex, getdetalhes, getcadastro, postcadastro, getdelete } from '../controller/Constrollador.js';

export const routers = express.Router();

//Rotas
routers.get("/", getindex);
routers.get("/detalhes/:id", getdetalhes);
routers.get("/cadastro", getcadastro);
routers.post('/cadastro', postcadastro);
routers.get('/delete/:id', getdelete);
   
//routers.get("/lista", getlista);
  