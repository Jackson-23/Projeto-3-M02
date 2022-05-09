import { connection } from "../database/connection.js";
import { itens } from '../model/itens.js';

export const getindex = async (req, res) => {
    try{
        // forma de coletar os dados do banco de dados
        // const listitens = await connection.query('SELECT * FROM itens', {
        //     model: itens
        // })
        const listitens = await itens.findAll();
        console.log(listitens);
        res.render("index.ejs", {listitens});
    } catch(error){
        res.send(error.message);
    }
}

export const getdetalhes = async (req, res) => {
    const listitens = await itens.findAll();
    const id = +req.params.id;
    console.log(+req.params.id);
    let item = listitens.find((item) => item.id == id);
    console.log(item);
    res.render("detalhes.ejs", {item});
}

export const getcadastro = (req, res) =>{
    res.render("cadastro.ejs");
}

export const postcadastro = async (req, res) =>{
    const {nome, autor, imagem, ano, edicao, qtd_pg} = req.body;
    try {
        await connection.query(`INSERT INTO itens (nome, autor, img, ano, edicao, qtd_pg) VALUES('${nome}', '${autor}', '${imagem}', '${ano}', '${edicao}', '${qtd_pg}')`);
        res.redirect('/');
    }
    catch(error){
        res.send(error.message);
    }
}


export const getdelete = async (req, res) => {
    try{
        await connection.query(`DELETE FROM itens WHERE id = ${req.params.id}`);
        res.redirect('/');
    } catch(error){
        res.send(error.message);
    }
}