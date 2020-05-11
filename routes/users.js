var express = require('express');
var router = express.Router();

var authentication = require('../middleware/authentication');

// Require controller modules.
var user_controller = require('../controllers/userController');

var user_cont = new user_controller();

/**
 * GET login page.
 */
router.get('/login', function (req, res) {
  res.render('login', {title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', message: ''});
});

/**
 * POST login action handler.
 */
router.post('/login', user_cont.login);

module.exports = router;
