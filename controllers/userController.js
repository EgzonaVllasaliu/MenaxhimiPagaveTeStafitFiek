var User = require('../models/user');
var bcrypt = require('bcrypt');
var landing_cont = require('../controllers/landingController');
var authentication = require('../middleware/authentication');




const { pool } = require('../database/dbConnection')

var saltRounds = 10;

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
                    // var result = 2 + 2;
                    // console.log(result)
                    // res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', result: result });
                res.redirect('index')
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
        pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
            if (error) {
                throw error
            }
            console.log(results.rows[0]['username'])
            res.status(200).json(results.rows)
        })
    }

    // todo get profile for a specific user function

    // todo add a user

    createUser(req,res){
        const { first_name, last_name, username, password, parent_name, personal_number, birthdate, birthplace, address, mobile, phone, email, gender, nationality, experience, education, previous_years_experience } = req.body
        var hashedPassword;
        
        bcrypt.hash(password, saltRounds, function (err, hash) {
                if (err) {
                    throw err
                } else {
                    hashedPassword = hash;
                }
            })    
        console.log(hashedPassword)
    
        pool.query('INSERT INTO users (first_name, last_name, parent_name, username, password, personal_number, birthdate, birthplace, address, mobile, phone, email, gender, education, previous_years_experience, experience, nationality) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17)', [first_name,last_name, parent_name, username, hashedPassword, personal_number, birthdate, birthplace, address, mobile, phone, email, gender, education, previous_years_experience, experience, nationality], (error, results) => {
            if (error) {
                throw error
            }
            res.status(201).send(`User added with ID: Po dhez babik`)
        })
    }

    // todo update a user

    // todo delete a user and its related data
}

module.exports = UserController;