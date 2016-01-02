var express = require('express');
router = express.Router();
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var knex = require('../db/knex');

// router.post('/addwish', function(req, res, next){
//   knex('lastwish').insert({
//     user: req.body.user,
//     wish: req.body.wish,
//     radness: req.body.radness,
//     complete: req.body.complete,
//   }, 'user').then(function(user){
//     console.log('fuck');
//   })
// })

module.exports = router;
