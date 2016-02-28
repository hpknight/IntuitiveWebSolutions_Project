var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});

// set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));

// set up route to the index.html file
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

var apiRoutes = express.Router();
apiRoutes.post('/request', function(req, res) {
	console.log(req.body);
	return res.json({success: true, message: 'finally!'});
});

app.use('/api', apiRoutes);

var server = app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000/');
});
