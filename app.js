var express = require('express')
	, load = require('express-load')
	, bodyParser = require('body-parser')
	, methodOverride = require('method-override')
	, app = express()
	, server = require('http').Server(app);

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

load('models')
	.then('controllers')
	.then('routes')
	.into(app);

server.listen(app.get('port'), function() {
	console.log('Server online.');
});