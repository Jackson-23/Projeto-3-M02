import Sequelize from "sequelize"
import { connection } from "../database/connection.js"

export const itens = connection.define("itens", {
    id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ano: {
        type: Sequelize.STRING,
        allowNull: false
    },
    edicao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    qtd_pg: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},
{
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
});

const initTable = async () => {
    await itens.sync;
}

initTable();

module.exports = itens;