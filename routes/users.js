var express = require('express');
var router = express.Router();

var authentication = require('../middleware/authentication');

// Require controller modules.
var user_controller = require('../controllers/userController');

var user_cont = new user_controller();

router.get('/', user_cont.getUsers);
router.post('/createUser', user_cont.getUsers);
module.exports = router;