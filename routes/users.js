var express = require('express');
var router = express.Router();

var authentication = require('../middleware/authentication');

// Require controller modules.
var user_controller = require('../controllers/userController');

var user_cont = new user_controller();

/**
 * GET login page.
 */
router.get('/', authentication.is_not_loggedin, function(req, res) {
    res.render('login', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', message: '' });
});

/**
 * POST login action handler.
 */
router.post('/index', user_cont.login);

router.get('/index', authentication.is_login, function(req, res) {
    // todo pass current user's data through parameters
    // todo get user's role from coockie
    console.log("Palfuhjeih")
    console.log(req.session.userId)
    res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave' });
});

router.get('/logout', user_cont.logout);

module.exports = router;