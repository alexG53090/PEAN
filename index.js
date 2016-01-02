// Requirements
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var knex = require('./db/knex');
var app = express();
// use modules
app.use(express.static('./views'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// get some routes goin'
var router = express();

// use dem routes
// app.use('/enter', router)

app.post('/addwish', function(req, res, next){
  knex('lastwish').insert({
    user: req.body.user,
    wish: req.body.wish,
    radness: req.body.radness,
    complete: req.body.complete,
  }, 'user').then(function(user){
    console.log('fuck');
  })
})

app.get('/main', function(req, res, next){
  res.redirect('/main.html')
})

app.listen(3000, function(){
  console.log('Locked into port: 3000')
})
