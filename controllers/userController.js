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
                    if(role == 1){
                        res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', role: role});
                    }else{

                        pool.query("SELECT * FROM users WHERE role='1' ORDER BY user_id ASC", (error, results) => {
                            if (error) {
                                throw error
                            }
                            var users = results.rows
                            res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave',role: role, users: users});
                        })

                    }
                   
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
            var user = results.rows
            res.redirect('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', user: user});
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
    updateUser(req,res){
        const { first_name2, last_name2, parent_name2, personal_number2, birthdate2, birthplace2, address2, mobile2, phone2, email2, gender2, nationality2, experience2, education2, previous_years_experience2, username2} = req.body

        pool.query("UPDATE users SET first_name='$1', last_name='$2', parent_name='$3', personal_number='$4', birthdate='$5', birthplace='$6', address='$7', mobile='$8', phone='$9', email='$10', gender='$11', education='$12', previous_years_experience='$13', experience='$14', nationality='$15') WHERE username='$16'", [first_name2, last_name2, parent_name2, personal_number2, birthdate2, birthplace2, address2, mobile2, phone2, email2, gender2, education2, previous_years_experience2, experience2, nationality2, username2], (error, results) => {
            if (error) {
                throw error
            }
            res.redirect('/index')
        })
    }

    // todo delete a user and its related data
}

module.exports = UserController;