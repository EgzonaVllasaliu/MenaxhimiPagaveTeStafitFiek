var User = require('../models/user');
// var bcrypt = require('bcrypt');
var moment = require('moment');
var landing_cont = require('../controllers/landingController');
var authentication = require('../middleware/authentication');

const { pool } = require('../database/dbConnection')

var saltRounds = 10;

class UserController {

    login(req, res) {
        var message = '';

        if (req.method == "POST") {
            var post = req.body;
            var username = post.username;
            var password = post.password;

            pool.query('SELECT * FROM users WHERE users.username = $1',[username], (error, results) => {
                if (error) {
                    throw error;
                }
                else if(username == results.rows[0]['username'] && password == results.rows[0]['password']){
                    req.session.userId = username;
                        // todo check user's role and store it on a cookie
                    var role =  results.rows[0]['role'] 
                    res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', role: role});
                }else{
                    message = 'Nuk e keni shkruar përdoruesin ose fjalëkalimin e saktë!';
                    res.render('login', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', message: message });
                }

            })
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
       
        pool.query('INSERT INTO users (first_name, last_name, parent_name, username, password, personal_number, birthdate, birthplace, address, mobile, phone, email, created_at, gender, education, previous_years_experience, experience, nationality) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)', [first_name,last_name, parent_name, username, password,personal_number, birthdate, birthplace, address, mobile, phone, email, moment(Date.now()).format('MM/DD/YYYY'), gender, education, previous_years_experience, experience, nationality], (error, results) => {
            if (error) {
                throw error
            }
            res.redirect('/index')
        })
    }

    // todo update a user

    // todo delete a user and its related data
}

module.exports = UserController;