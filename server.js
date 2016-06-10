var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cors = require('cors');
var config = require('./config');
var profileCtrl = require('./controllers/profileCtrl.js');
var userCtrl = require('./controllers/userCtrl.js');


var app = express();

var corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({ secret: config.sessionSecret, resave: true, saveUninitialized: true }));
app.use(express.static(__dirname + '/public'));

app.post('/api/login', userCtrl.login);

app.get('/api/profiles', profileCtrl.getProfile);

var port = 3000;
app.listen(port, function(){
  console.log('listening on port 3000')
})
