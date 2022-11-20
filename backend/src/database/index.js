// este arquivo serve para colocarmosas "migrations" para criar as tabelas posteriomente

// iniciando com o Sequelize

// importando o Sequelize
const Sequelize = require("sequelize");

// importando o arquivo de config do banco de dados
const databaseConfig = require("../config/database");

// importando model
const Usuarios = require("../model/Usuarios");

// iniciando a conexão com o banco de dados
// criando classe de conexão e iniciando com o databaseConfig
const connection = new Sequelize(databaseConfig);

// iniciando o Model na aplicação
// Model.init(*connection*): o parâmetro connetion indica em qual database o nosso módulo será trabalhado
// init vem da classe static criada no model
Usuarios.init(connection);

// exportando a conexão
module.exports = connection;

// criação do banco de dados com o yarn
// code: yarn sequelize db:create
