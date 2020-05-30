var express = require('express');
var router = express.Router();

var authentication = require('../middleware/authentication');

// Require controller modules.
var user_controller = require('../controllers/userController');
var landing_controller = require('../controllers/landingController')

var user_cont = new user_controller();

/**
 * GET login page.
 */
router.get('/', authentication.is_not_loggedin, landing_controller.login);

/**
 * POST login action handler.
 */
router.post('/index', user_cont.login);

/**
 * GET home page.
 */
router.get('/index', authentication.is_login, landing_controller.landing);

/**
 * Logout.
 */
router.get('/logout', user_cont.logout);

module.exports = router;