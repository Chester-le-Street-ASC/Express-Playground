var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express', headers: JSON.stringify(req.headers) });
  res.json(req.headers);
});

module.exports = router;
