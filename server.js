var express = require('express');
var app = express();
var path = require('path');

// set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));

// set up route to the index.html file
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/index.html'));
});

var server = app.listen(3000, function() {
	console.log('Server running at http://127.0.0.1:3000/');
});