// primeira letra maiúsucula para indicar que é um mmodel

// importando o Model e o DataTypes do sequelize
// Model: com indicamos que o nosso arquivoé um Model
// DataTypes: com eles indicamos os tipos dos campos deste módulo
const { Model, DataTypes } = require("sequelize");

// criando a classe
// criando classe e dizendo que ela é um Model
class Usuarios extends Model {
	// Mapeando os campos
	// static: function que não vai mudar
	static init(sequelize) {
		// super: constructor
		super.init(
			{
				// iniciando o super com o campos da tabela

				// indicando os tipos
				nome: DataTypes.STRING,
				senha: DataTypes.STRING,
			},
			{
				/* parâmetro utilizado para receber a 
				conexão e efetivarmos ela */
				sequelize,
			}
		);
	}
}

//módulo criado ^_^
module.exports = Usuarios;
