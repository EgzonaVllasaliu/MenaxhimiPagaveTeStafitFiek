const { pool } = require('../database/dbConnection')
var moment = require('moment');

class chatController {

    getChat(req, res) {
        console.log("Received")
        pool.query('SELECT * FROM chat', (error, results) => {
            if (error) {
                throw error
            }
            console.log(results.rows[0]['message'])
            res.status(200).json(results.rows)
        })
    }

    saveChat(req,res){
        const { sender,message} = req.body
       
        pool.query('INSERT INTO chat (Sender,message,timestamps) VALUES ($1, $2, $3)',[sender,message,moment(Date.now()).format('MM/DD/YYYY')], (error) => {
            if (error) {
                throw error
            }
            console.log("inserted")
            res.render('/')
        })
    }
}

module.exports = chatController;