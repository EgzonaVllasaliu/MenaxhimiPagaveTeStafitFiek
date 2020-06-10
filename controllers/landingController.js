const { pool } = require('../database/dbConnection')

exports.landing = function(req, res) {
    // todo pass current user's data through parameters
    // todo get user's role from coockie
    role = req.session.role
    if(role == 1){
        res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', role: role});
    } else{
        pool.query("SELECT * FROM users WHERE role='1' ORDER BY user_id ASC", (error, results) => {
            if (error) {
                throw error
            }
            var users = results.rows
            // res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave',role: role, users: users});
            pool.query("SELECT * FROM contract", (error, results) => {
                if (error) {
                    throw error
                }
                var contracts = results.rows
                res.render('index', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave',role: role, users: users, contracts:contracts});
            })
        })
    }
}

exports.login = function(req, res) {
    res.render('login', { title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', message: '' });
}