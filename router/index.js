var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
   var quotes_data = require('../quotes.json');
   var index =Math.floor((Math.random() * (quotes_data.length- 1) ) + 1);
  res.render('index', {
    title: 'Quotes of the Day',
    quote: quotes_data[index].quote,
    author: quotes_data[index].author
  });
});
module.exports = router;
