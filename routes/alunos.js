module.exports = function(app) {

	var alunos = app.controllers.alunos;

	app.get('/alunos', alunos.list);
	app.post('/alunos', alunos.create);
	app.delete('/alunos/id', alunos.delete);
	app.get('/alunos/:id', alunos.show);
	app.put('/alunos/:id', alunos.update);

};