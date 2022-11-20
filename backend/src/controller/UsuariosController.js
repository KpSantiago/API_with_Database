// aqui onde trabalhamos com nosso controller

// importando o módulo do Usuarios
const Usuarios = require("../model/Usuarios");

module.exports = {
	/* utilizamos logo o  module.exports porque nós 
    precisaremos utilizar os métodos criado aqui no
    arquivo de rotas */

	// dizemos que ela é uma função assíncrona

	async index(req, res) {
		const usuarios = await Usuarios.findAll();
		// findAll(): utilizadopara pegar todo os dados da tabela

		// Enviando os dados em JSON
		return res.json(usuarios);
	},

	// pegando registro pelo id
	async findById(req, res) {
		const { id } = req.params;

		const usuario = await Usuarios.findAll({
			/* para procurarmo os campos com o where,
			 nós utilizamos o propriedade where dentro
             do findAll() */
			where: {
				id: id,
			},
		});

		return res.json(usuario);
	},

	// salvando dados no dbe
	async store(req, res) {
		const { nome, senha } = req.body;

		// create(): utilizado para criar dados
		const usuarios = await Usuarios.create({
			// aqui criamos o nosso novo usuario
			// precisá-se identificar o campo com o mesmo nome

			nome: nome,
			senha: senha,
			// poderia ser apenas: nome, senha
		});

		return res.json(usuarios);
	},

	// delete
	async delete(req, res) {
		const { id } = req.params;

		const usuarios = await Usuarios.destroy({
			where: {
				id: id,
			},
		});

		return res.json(usuarios);
	},

	// put e patch
	async update(req, res) {
		const { id, nome, senha } = req.body;

		const usuarios = await Usuarios.update(
			// precisa-se separar as funcões de cada um por virgulas e chaves
			{
				// update dos dados
				nome: nome,
				senha: senha,
			},
			{
				// localização de qual dado será atualizado
				where: {
					id: id,
				},
			}
		);

		return res.json(usuarios);
	},
};
/* 
asyc function: é uma função que acessam ou buscam 
informações de algum tipo de recurso em um disposi-
tivo externo. 
    Ex: a function de usuarios irá buscar suas 
    informações na base de dados

await: serve para fazer o JS só ler as próximas linhas de códigos 
quando a liha na qual ele foi colocado estiver
funcionando.
    Ex: o return da function só irá funcionar quando
    a const usuarios receber a informações da tabela
    usuario da base de dados.
*/
