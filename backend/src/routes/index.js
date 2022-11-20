const express = require("express");

// importando o UsuariosController
const UsuariosController = require("../controller/UsuariosController");
const Usuarios = require("../model/Usuarios");

// impportando a biblioteca de rotas do express
const routes = express.Router();

routes.get("/", (req, res) => {
	res.send(`<h1>Hello World</h1>`);
});

/* retornando os dados da tabela usuario pelo controller
 acessando a function index */
routes.get("/usuarios", UsuariosController.index);

// pegando unicamente
// sintaxe de um parametro de url: /url/:parametro
routes.get("/usuarios/:id", UsuariosController.findById);

//fazendo o post
// o insomnia consegue diferenciar a rota get de usuarios da post usuarios
routes.post("/usuarios", UsuariosController.store);

// delete
routes.delete("/delete/:id", UsuariosController.delete);

// put e patch
routes.put("/update", UsuariosController.update);

// expportando rotas
module.exports = routes;
