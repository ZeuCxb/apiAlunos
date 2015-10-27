module.exports = function() {
	var mongoose = require('mongoose');

	var db = mongoose.connect('mongodb://zeucxb:Zeu16051997@ds041404.mongolab.com:41404/heroku_9llx0gh8');

	return db;
};