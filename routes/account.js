var express = require('express');
const { append } = require('express/lib/response');
var router = express.Router();
var userdata = require('../config/account.json')
const session = requrie('express-sassion')

/* GET home page. */
router.get('/:', function(req, res, next) {
  res.render('account/index');
});
router.get('/login', function(req, res, next) {
  res.render('account/login');
});
router.post('/login_process', function(req, res, next) {
  var post = req.body
  var userid = post.userid
  var pw = post.password
  if (userid === userdata.userid && pw === userdata.password) {
    
  } else {
    res.send(`NONONO`)
  }
});
router.get('/register', function(req, res, next) {
  res.render('account/register');
});
router.post('/register_process', function(req, res, next) {
});

module.exports = router;
