"use strict";

// código para rodar a migration: yarn sequelize db:migrete

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	// up: quando queremos criar algo
	async up(queryInterface, Sequelize) {
		// queryInterface: serve para criarmos algo
		// param1: o que será criado
		// param2: atributos(campos)

		return queryInterface.createTable("usuarios", {
			// indicaremos os atributos(campos)
			id: {
				// quando vamos dizer o=um tipo, colocamos sequelize.tipo
				type: Sequelize.INTEGER, //tipo do atributo
				primaryKey: true, //é uma primary key
				autoIncrement: true, //auto incrementação do ID
				allowNull: false, //não pode ser nulo
			},
			nome: {
				type: Sequelize.STRING,
				allowNull: true,
			},
			senha: {
				type: Sequelize.STRING,
				allowNull: false,
			},
		});
	},

	// down: quando queremos desfazer algo
	async down(queryInterface, Sequelize) {},
};
