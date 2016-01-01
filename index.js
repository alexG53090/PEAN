var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');

app.use(cors, cors())


app.get('/', function(req, res, next){
  res.send('sup, Foo? Nothing, Bar!')
})

app.listen(3000, function(){
  console.log('Locked into port: 3000')
})
