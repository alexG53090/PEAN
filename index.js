// Requirements
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');

// use modules
app.use(express.static('./views'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.get('/', function(req, res, next){
  res.redirect('/index.html')
})

app.listen(3000, function(){
  console.log('Locked into port: 3000')
})
