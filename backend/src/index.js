// requiring express
const express = require("express");

//utilizamos ele para trabalharmos com os dados, transladando-os, ou seja, recebendo e enviando dados
const cookieParser = require("cookie-parser");

// basicamente, o cors permite que passemos dados para determinando domínio
const cors = require("cors");

// routes
const routes = require("./routes/index");

// este require não precisa de const pois serve apenas pata indicarmos que estamos usando uma database
// importando nossa conexão diretório: database
require("./database");

// initialing
const app = express();

// conecting with the port 3000
app.listen("3000", () => console.log("Initialized"));

// middleware
app.use(express.json());

// cookie parser
app.use(cookieParser());

// cors
app.use(cors());

// routes
app.use(routes);

/*
    -- ANOTAÇÕES --
 model: responsável por fazer o mapeamento da tabela criada no bannco de dados, comica o 
nosso controller com o modelo da nossa base de dados
*/
