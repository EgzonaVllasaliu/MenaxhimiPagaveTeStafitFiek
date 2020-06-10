var moment = require('moment');
const { pool } = require('../database/dbConnection')

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
                    var role =  results.rows[0]['role'] 
                    req.session.role = role
                    res.redirect('/')                   
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

    getUsers(req, res) {
        pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
            if (error) {
                throw error
            }
            var user = results.rows
            res.redirect('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', user: user});
        })
    }

    createUser(req,res){
        const { first_name, last_name, username, password, parent_name, personal_number, birthdate, birthplace, address, mobile, phone, email, gender, nationality, experience, education, previous_years_experience } = req.body
       
        pool.query('INSERT INTO users (first_name, last_name, parent_name, username, password, personal_number, birthdate, birthplace, address, mobile, phone, email, created_at, gender, education, previous_years_experience, experience, nationality) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18)', [first_name,last_name, parent_name, username, password,personal_number, birthdate, birthplace, address, mobile, phone, email, moment(Date.now()).format('MM/DD/YYYY'), gender, education, previous_years_experience, experience, nationality], (error, results) => {
            if (error) {
                throw error
            }
  
            res.redirect('/')
        })
    }

    updateUser(req,res, next){ 
        const { first_name, last_name, parent_name, personal_number, birthdate, birthplace, address, mobile, phone, email, gender, nationality, experience, education, previous_years_experience, username} = req.body

        pool.query(
            'UPDATE users SET first_name=$1, last_name=$2, parent_name=$3, personal_number=$4, birthdate=$5, birthplace=$6, address=$7, mobile=$8, phone=$9, email=$10, created_at=$11, gender=$12, education=$13, previous_years_experience=$14, experience=$15, nationality=$16 WHERE username =$17', [first_name, last_name, parent_name, personal_number, birthdate, birthplace, address, mobile, phone, email, moment(Date.now()).format('MM/DD/YYYY'), gender, education, previous_years_experience, experience, nationality, username],
            (error, results) => {
                if (error) {
                    throw error
                }
                    res.redirect('/')
               
            }
        )
    }
}

module.exports = UserController;