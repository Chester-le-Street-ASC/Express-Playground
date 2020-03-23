var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(req.headers);
});

router.get('/x', function(req, res, next) {
  res.json(req.headers);
});

module.exports = router;
