var express = require('express');
var router = express.Router();

var authentication = require('../middleware/authentication');

// Require controller modules.
var user_controller = require('../controllers/userController');
var paga_controller = require('../controllers/pagaController');
var bonus_controller = require('../controllers/bonusController');

var user_cont = new user_controller();
var paga_cont = new paga_controller();
var bonus_cont = new bonus_controller();

/**
 *  GET index page.
 */
router.get('/', authentication.is_login, function(req, res) {
  // todo pass current user's data through parameters
  // todo get user's role from coockie
  var role = 'user';
  res.render('index', {title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', role: role});
});

/**
 * GET login page after logging out.
 */
router.get('/logout', user_cont.logout);

module.exports = router;
