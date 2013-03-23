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
var council = fs.readFileSync(__dirname + '/council.ejs', 'utf8');
var raas = fs.readFileSync(__dirname + '/raas.ejs', 'utf8');
var diwali = fs.readFileSync(__dirname + '/diwali.ejs', 'utf8');
var holi = fs.readFileSync(__dirname + '/holi.ejs', 'utf8');
var taste = fs.readFileSync(__dirname + '/taste.ejs', 'utf8');
var photos = fs.readFileSync(__dirname + '/photogallery.ejs', 'utf8');
var diwaliphotos = fs.readFileSync(__dirname + '/diwali_photos.ejs', 'utf8');
var raasphotos = fs.readFileSync(__dirname + '/raas_photos.ejs', 'utf8');
var holiphotos = fs.readFileSync(__dirname + '/holi_photos.ejs', 'utf8');
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
app.get('/council', function (req, res) {
        res.send(ejs.render(council,{}));
});
app.get('/raas', function (req, res) {
        res.send(ejs.render(raas,{}));
});
app.get('/diwali', function (req, res) {
        res.send(ejs.render(diwali,{}));
});
app.get('/holi', function (req, res) {
        res.send(ejs.render(holi,{}));
});
app.get('/photos', function (req, res) {
        res.send(ejs.render(photos,{}));
});
app.get('/taste', function (req, res) {
        res.send(ejs.render(taste,{}));
});
app.get('/diwali_photos', function (req, res) {
        res.send(ejs.render(diwaliphotos,{}));
});
app.get('/raas_photos', function (req, res) {
        res.send(ejs.render(raasphotos,{}));
});
app.get('/holi_photos', function (req, res) {
        res.send(ejs.render(holiphotos,{}));
});
app.use(express.static(__dirname));
//process.env.PORT will be set when the heroku site initializes
server.listen(process.env.PORT || 3000);
console.log("Server running on port:")
console.log(process.env.PORT || 3000)
