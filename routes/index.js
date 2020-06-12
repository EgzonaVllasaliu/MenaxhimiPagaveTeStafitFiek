var express = require('express');
var router = express.Router();

var authentication = require('../middleware/authentication');

// Require controller modules.
var user_controller = require('../controllers/userController');
var contract_controller = require('../controllers/kontrataController');
var bonus_controller = require('../controllers/bonusController');
var landing_controller = require('../controllers/landingController')
var chat_controller = require('../controllers/chatController')

var user_cont = new user_controller();
var cont_cont = new contract_controller();
var bon_cont = new bonus_controller();
var chat_cont = new chat_controller();
/**
 *  GET login page.
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

router.post('/createUser', user_cont.createUser);
router.post('/updateUser', user_cont.updateUser);

router.post('/createContract', cont_cont.createContract);
router.post('/updateContract', cont_cont.updateContract);

router.post('/createBonus', bon_cont.createBonus);
router.post('/updateBonus', bon_cont.updateBonus);

router.post('/createChat', chat_cont.saveChat);
router.get('/getChat', chat_cont.getChat);


module.exports = router;