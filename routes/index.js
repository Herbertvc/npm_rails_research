var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var array = [1,2,3,4,5]
  res.render('index', { title: 'Express', arr: array });
});

module.exports = router;
