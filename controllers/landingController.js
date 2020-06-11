const {pool} = require('../database/dbConnection')

exports.landing = function (req, res) {
    // todo pass current user's data through parameters
    // todo get user's role from coockie
    role = req.session.role;
    user = req.session.user;
    if (role == 1) {
        pool.query('SELECT * FROM users WHERE user_id=$1', [user], (error, results) => {
            if (error) {
                throw error;
            }
            var useri = results.rows;
            pool.query("SELECT * FROM contract WHERE user_id=$1", [user], (error, results) => {
                if (error) {
                    throw error;
                }
                var contracts = results.rows;
                pool.query("SELECT * FROM bonus WHERE user_id=$1", [user], (error, results) => {
                    if (error) {
                        throw error;
                    }
                    var bonuses = results.rows
                    res.render('index', {
                        title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave',
                        role: role,
                        useri: useri,
                        contracts: contracts,
                        bonuses: bonuses
                    });
                })
            })
        })
    } else {
        pool.query("SELECT * FROM users WHERE role='1' ORDER BY user_id ASC", (error, results) => {
            if (error) {
                throw error
            }
            var users = results.rows
            pool.query("SELECT * FROM contract", (error, results) => {
                if (error) {
                    throw error
                }
                var contracts = results.rows
                pool.query("SELECT * FROM bonus", (error, results) => {
                    if (error) {
                        throw error
                    }
                    var bonuses = results.rows
                    res.render('index', {
                        title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave',
                        role: role,
                        users: users,
                        contracts: contracts,
                        bonuses: bonuses
                    });
                })
            })
        })
    }
}

exports.login = function (req, res) {
    res.render('login', {title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', message: ''});
}