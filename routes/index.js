var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/service', function(req, res, next) {
  res.render('service');
});
router.get('/official', function(req, res, next) {
  res.render('official');
});
router.get('/qna', function(req, res, next) {
  res.render('qna');
});
router.get('/client', function(req, res, next) {
  res.render('client');
});

module.exports = router;
