var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', val1: 'Jay', val2: 'Ar', val3: 'Bauson' });
});

module.exports = router;
