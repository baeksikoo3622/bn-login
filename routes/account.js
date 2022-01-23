var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:', function(req, res, next) {
  res.render('account/index');
});
router.get('/login', function(req, res, next) {
  res.render('account/login');
});
router.use('/login_process', function(req, res, next) {
});
router.get('/register', function(req, res, next) {
  res.render('account/register');
});
router.use('/register_process', function(req, res, next) {
});

module.exports = router;
