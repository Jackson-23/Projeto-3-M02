import { connection } from "../database/connection.js";
import { itens } from '../model/itens.js';

export const getindex = async (req, res) => {
    // const listitens = await connection.query('SELECT * FROM itens', {
    //     model: itens
    // })
    const listitens = await itens.findAll();
    console.log(listitens)
    res.render("index.ejs", {listitens}); 
}