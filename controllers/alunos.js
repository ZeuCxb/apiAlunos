module.exports = function(app) {
	var AlunoController = {};

	var alunos = [
		{_id: 1, nome: 'exp1', email: 'exp1@email.com'},
		{_id: 2, nome: 'exp2', email: 'exp2@email.com'},
		{_id: 3, nome: 'exp3', email: 'exp3@email.com'}
	];

	AlunoController.list = function(req, res) {
		res.json(alunos);
	};

	AlunoController.create = function(req, res) {
		var aluno = req.body.aluno;
        alunos.push(aluno);
	};

	AlunoController.delete = function(req, res) {

	};

	AlunoController.show = function(req, res) {
		var id = req.params.id;

		var aluno = alunos.filter(function(alunos) {
			return alunos._id == id;
		})[0];

		aluno ?
			res.json(aluno) :
				res.status(404).send('Aluno não encontrado');
	};

	AlunoController.update = function(req, res) {

	};

	return AlunoController;
};