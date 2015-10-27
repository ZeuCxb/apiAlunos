module.exports = function(app) {
	var AlunoController = {};

	var Alunos = app.models.alunos;

	AlunoController.list = function(req, res) {
		Alunos.find().exec()
			.then(
				function(alunos) {
					res.json(alunos);
					res.end()
				},
				function(error) {
					console.error(error);
					res.status(500).json(error);
					res.end()
				}
			);
	};

	AlunoController.create = function(req, res) {
		Alunos.create(req.body)
			.then(
				function(contato) {
					res.status(201).json(contato);
					res.end()
				},
				function(error) {
					console.error(error);
					res.status(500).json(error);
					res.end()
				}
			);
	};

	AlunoController.delete = function(req, res) {
		var _id = req.params.id;

		Alunos.remove({"_id" : _id}).exec()
			.then(
				function() {
					res.status(204).end();
					res.end()
				},
				function(error) {
					return console.error(error);
				}
			);
	};

	AlunoController.show = function(req, res) {
		var _id = req.params.id;

		Alunos.findById(_id).exec()
			.then(
				function(aluno) {
					if(!aluno) throw new Error('Aluno não encontrado');

					res.json(aluno);
					res.end()
				},
				function(error) {
					console.error(error);
					res.status(404).json(error);
					res.end()
				}
			);
	};

	AlunoController.update = function(req, res) {
		var _id = req.params.id;

		Alunos.findByIdAndUpdate(_id, req.body).exec()
			.then(
				function(aluno) {
					res.json(aluno);
					res.end()
				},
				function(error) {
					console.error(error);
					res.status(500).json(error);
					res.end()
				}
			);
	};

	return AlunoController;
};