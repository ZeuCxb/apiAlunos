module.exports = function(app) {

	var alunos = app.controllers.alunos;

	app.get('/', function(req, res) {
		res.redirect('/alunos');
	});

	app.route('/alunos')
		.get(alunos.list)
		.post(alunos.create);
	
	app.route('/alunos/:id')
		.delete(alunos.delete)
		.get(alunos.show)
		.put(alunos.update);

};