var User = require('../models/user');
// var dbConnection = require('../database/dbConnection');

const { pool } = require('../database/dbConnection')

class UserController {

    login(req, res) {
        var message = '';

        if (req.method == "POST") {
            var post = req.body;
            var id = post.id;
            var password = post.password;

            // todo check if user exists (is valid) in database
            if (id == "admin" && password == "admin") {
                //session creation
                req.session.userId = id;
                console.log(req.session.userId)
                    // todo check user's role and store it on a cookie
                res.cookie('role', 'user')
                res.render('index');
            } else {
                message = 'Nuk e keni shkruar përdoruesin ose fjalëkalimin e saktë!';
                res.render('login', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', message: message });
            }
        }
    }

    logout(req, res) {
        req.session.destroy();
        res.clearCookie("role");
        res.redirect('/');
    }

    // todo get all user function

    getUsers(req, res) {
        pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })
    }

    // todo get profile for a specific user function

    // todo add a user

    // todo update a user

    // todo delete a user and its related data
}

module.exports = UserController;