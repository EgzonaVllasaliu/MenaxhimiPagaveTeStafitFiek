const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'MenaxhimiPagaveTeStafitFiek',
    password: 'root',
    port: 5432,
})

module.exports = {
    pool
}

// Object.defineProperty(exports, "pool", new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'MenaximiIPagaveTeStafitFiek',
//     password: 'root',
//     port: 5432,
// }));