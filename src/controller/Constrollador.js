import { connection } from "../database/connection.js";
import { itens } from '../model/itens.js';

export const getindex = async (req, res) => {
    // forma de coletar os dados do banco de dados
    // const listitens = await connection.query('SELECT * FROM itens', {
    //     model: itens
    // })
    const listitens = await itens.findAll();
    console.log(listitens)
    res.render("index.ejs", {listitens}); 
}

export const getdetalhes = async (req, res) => {
    const listitens = await itens.findAll();
    const id = +req.params.id;
    console.log(+req.params.id);
    let item = listitens.find((item) => item.id == id);
    console.log(item);
    res.render("detalhes.ejs", {item});
}