var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');

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
    var transporter = nodemailer.createTransport({
        service: 'Yahoo',
        auth: {
            user: '', // Your email id
            pass: '' // Your password
        }
    });
    var mailOptions = {
        from: '', // sender address
        to: '', // list of receivers
        subject: 'New Feature Request', // Subject line
        text: 'Feature Rquest App', // plaintext body
        html: '<div><p>'+req.body.title+'<p><p>'+req.body.description+'<p><p>'+req.body.client+'<p><p>'+req.body.clientPriority+'<p><p>'+req.body.targetDate+'<p><p>'+req.body.product+'<p></div>' // html body
    };
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        console.log(info);
    });
    return res.json({ success: true, message: 'finally!' });
});

app.use('/api', apiRoutes);

var server = app.listen(3000, function() {
    console.log('Server running at http://127.0.0.1:3000/');
});
