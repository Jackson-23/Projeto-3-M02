import express from 'express'
import { getindex } from '../controller/Constrollador.js';

export const routers = express.Router();

//Rotas
routers.get("/", getindex);
  
//routers.get("/cadastro", getcadastro);
  
//routers.get("/lista", getlista);
  