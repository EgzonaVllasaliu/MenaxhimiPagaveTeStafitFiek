const {pool} = require('../database/dbConnection')

class ContractController {

    createContract(req, res) {
        const {user_id, bank_account_id, department, position, contract_registration_date, contract_termination_date, working_days, days_off, basic_salary} = req.body

        pool.query('INSERT INTO CONTRACT (user_id, bank_account_id, department, position, contract_registration_date, contract_termination_date, working_days, days_off, basic_salary) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', [user_id, bank_account_id, department, position, contract_registration_date, contract_termination_date, working_days, days_off, basic_salary], (error, results) => {
            if (error) {
                throw error
            }
            res.redirect('/')
        })
    }

    updateContract(req, res, next) {
        const {user_id, bank_account_id, department, position, contract_registration_date, contract_termination_date, working_days, days_off, basic_salary, contract_id} = req.body

        pool.query('UPDATE CONTRACT SET user_id=$1, bank_account_id=$2, department=$3, position=$4, contract_registration_date=$5, contract_termination_date=$6, working_days=$7, days_off=$8, basic_salary=$9 WHERE contract_id =$10', [user_id, bank_account_id, department, position, contract_registration_date, contract_termination_date, working_days, days_off, basic_salary, contract_id],
            (error, results) => {
                if (error) {
                    throw error
                }
                res.redirect('/')
            }
        )
    }
}

module.exports = ContractController;