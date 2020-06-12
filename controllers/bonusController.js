const {pool} = require('../database/dbConnection')

class BonusController {

    createBonus(req, res) {
        const {user_id, extra_hours, price_extra_hours, work_hours, price_work_hours, bachelor_thesis, price_bachelor_thesis, master_thesis, price_master_thesis, master_exam, price_master_exam} = req.body

        pool.query('INSERT INTO bonus (user_id, extra_hours, price_extra_hours, work_hours, price_work_hours, bachelor_thesis, price_bachelor_thesis, master_thesis, price_master_thesis, master_exam,  price_master_exam) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [user_id, extra_hours, price_extra_hours, work_hours, price_work_hours, bachelor_thesis, price_bachelor_thesis, master_thesis, price_master_thesis, master_exam, price_master_exam], (error, results) => {
            if (error) {
                throw error
            }
            res.redirect('/')
        })
    }

    updateBonus(req, res, next) {
        const {user_id, extra_hours, price_extra_hours, work_hours, price_work_hours, bachelor_thesis, price_bachelor_thesis, master_thesis, price_master_thesis, master_exam, price_master_exam, bonus_id} = req.body
        pool.query('UPDATE bonus SET user_id=$1, extra_hours=$2, price_extra_hours=$3, work_hours=$4, price_work_hours=$5, bachelor_thesis=$6, price_bachelor_thesis=$7, master_thesis=$8, price_master_thesis=$9, master_exam=$10, price_master_exam=$11 WHERE bonus_id =$12', [user_id, extra_hours, price_extra_hours, work_hours, price_work_hours, bachelor_thesis, price_bachelor_thesis, master_thesis, price_master_thesis, master_exam, price_master_exam, bonus_id],(error, results) => {
                if (error) {
                    throw error
                }
                res.redirect('/')
            }
        )
    }
}

module.exports = BonusController;