var express = require('express')
var http = require('http')
var app = express();
var server = http.createServer(app);
var ejs = require('ejs')
var fs = require('fs')
var qs = require('querystring')
var httpreq = require('request')
var index = fs.readFileSync(__dirname + '/index.ejs', 'utf8');
var about = fs.readFileSync(__dirname + '/about.ejs', 'utf8');
var index2 = fs.readFileSync(__dirname + '/index2.html', 'utf8');
var membership = fs.readFileSync(__dirname + '/membership.ejs', 'utf8');
var contact = fs.readFileSync(__dirname + '/contact.ejs', 'utf8');
var photos = fs.readFileSync(__dirname + '/photos.ejs', 'utf8');
app.use(express.cookieParser());

//index http request 
app.get('/', function (req, res) {
        res.send(ejs.render(index,{}));
});

app.get('/index2', function (req, res) {
        res.send(ejs.render(index2,{}));
});

app.get('/about', function (req, res) {
        res.send(ejs.render(about,{}));
});
app.get('/membership', function (req, res) {
        res.send(ejs.render(membership,{}));
});
app.get('/contact', function (req, res) {
        res.send(ejs.render(contact,{}));
});
app.get('/photos', function (req, res) {
        res.send(ejs.render(photos,{}));
});
app.use(express.static(__dirname));
//process.env.PORT will be set when the heroku site initializes
server.listen(process.env.PORT || 3000);
console.log("Server running on port:")
console.log(process.env.PORT || 3000)
