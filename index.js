var express = require('express');
var app = express();

app.get('/', function(req, res, next){
  res.send('sup, Foo? Nothing, Bar!')
})

app.listen(3000, function(){
  console.log('Locked into port: 3000')
})
