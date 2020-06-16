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
                    pool.query('SELECT users.user_id, users.first_name,users.last_name, contract.bank_account_id,contract.working_days, contract.days_off, contract.department,contract.position, contract.basic_salary FROM salarydetails INNER JOIN contract ON contract.contract_id = salarydetails.contract_id INNER JOIN USERS ON USERS.user_id = contract.user_id', (error, results) => {
                        if (error) {
                            throw error
                        }
                        var details = results.rows
                        pool.query('SELECT * FROM salarydetails',(error, results) => {
                            if (error) {
                            throw error
                            }
                                var salarydetails = results.rows
                                pool.query(`SELECT  LlogBonuset (${bonuses[0]['extra_hours']}, ${bonuses[0]['price_extra_hours']}, ${bonuses[0]['work_hours']}, ${bonuses[0]['price_work_hours']}, ${bonuses[0]['bachelor_thesis']}, ${bonuses[0]['price_bachelor_thesis']}, ${bonuses[0]['master_thesis']}, ${bonuses[0]['price_master_thesis']}, ${bonuses[0]['master_exam']}, ${bonuses[0]['price_master_exam']})`, (error, results) => {
                                    if (error) {
                                        throw error
                                    }
                                    var calcBonuses = results.rows
                                    pool.query(`SELECT llogpagabruto(${contracts[0]['basic_salary']}, ${users[0]['previous_years_experience']}, ${calcBonuses[0]['llogbonuset']}, ${salarydetails[0]['meals']}, ${salarydetails[0]['transport']})`, (error, results) => {
                                        if (error) {
                                            throw error
                                        }
                                        var brutoSalary = results.rows
                                        
                                            res.render('index', {
                                                title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave',
                                                role: role,
                                                users: users,
                                                bonuses: bonuses, 
                                                contracts: contracts,
                                                brutoSalary: brutoSalary,
                                                salarydetails: salarydetails, 
                                                details: details
                                            });
                                    })

                                })
                            })
                        }
                    )

                })
            })
        })
    }
}

exports.login = function (req, res) {
    res.render('login', {title: 'SEMP-Sistemi Elektronik për Menaxhimin e Pagave', message: ''});
}