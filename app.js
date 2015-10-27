var express = require('express')
	, load = require('express-load')
	, bodyParser = require('body-parser')
	, methodOverride = require('method-override')
	, app = express()
	, server = require('http').Server(app);

app.set('port', (process.env.PORT || 5000));

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

load('models', {cwd: 'app'})
	.then('controllers')
	.then('routes')
	.into(app);

server.listen(app.get('port'), function() {
	console.log('Server online.');
});