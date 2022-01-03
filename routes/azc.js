var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('azc/index');
});
router.get('/about', function(req, res, next) {
  res.render('azc/about');
});
router.get('/official', function(req, res, next) {
  res.render('azc/official');
});
router.get('/release', function(req, res, next) {
  res.render('azc/release');
});

module.exports = router;
