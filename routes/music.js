var express = require('express');
var router = express.Router();

/* GET music index */
router.get('/', function(req, res, next) {
  res.send('respond with music');
});

module.exports = router;
