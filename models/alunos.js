/* module.exports = function(app) {

	var db = require('../db/db_connect.js')();
	var Schema = require('mongoose').Schema;


	var aluno = Schema({
		nome: {type: String, required: true},
		email: {type: String, required: true, index: {unique: true}}
	});

	return db.model('aluno', aluno);

}; */