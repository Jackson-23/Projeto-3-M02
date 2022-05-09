import express from 'express'
import { getindex, getdetalhes, getcadastro } from '../controller/Constrollador.js';

export const routers = express.Router();

//Rotas
routers.get("/", getindex);
routers.get("/detalhes/:id", getdetalhes);
routers.get("/cadastro", getcadastro);
  
//routers.get("/cadastro", getcadastro);
  
//routers.get("/lista", getlista);
  