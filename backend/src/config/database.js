// aqui ficará as configurções e o nosso caminho para o banco de dados

// expoprtando a configuração para todos os arquivos
module.exports = {
	dialect: "mysql", //dialeto do db que será utilizado
	host: "localhost", //tipo de domínioi utilizado
	username: "root", //usuário root
	port: "3306", // porta do db que será utilizada
	password: "",
	database: "trabalhodb", //nome do meu banco de dados
	define: {
		//chamada das configs
		timestamps: false, //diz se toda tabela terá a data de criação e alteração
		underscored: true,
	},
};
