const { pool } = require('../database/dbConnection')

class chatController {

    getChat(req, res) {
        console.log("Inserted1")
        pool.query('SELECT * FROM chat', (error, results) => {
            if (error) {
                throw error
            }
            console.log(results.rows[0]['message'])
            res.status(200).json(results.rows)
        })
    }

    saveChat(req,res){
        const { Sender,message} = req.body
       
        pool.query('INSERT INTO chat (Sender,message,timestamps) VALUES ($1, $2, $3)',["sender",message,Date.now()], (error) => {
            if (error) {
                throw error
            }
            console.log("Inserted")
        })
    }
}

module.exports = chatController;