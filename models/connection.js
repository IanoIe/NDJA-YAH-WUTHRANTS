var mysql = require('mysql');
var util = require('util');

/** Ligação a Base de dados RemoteMysql */
var pool = mysql.createPool({
    connectionLimit: 20,
    host: 'localhost',
    user: 'root',
    password: 'Mamae13',
    database: 'NDA_YAH_WUTHRANTS'
});

pool.getConnection((err, connection) =>{
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.');
        }
        if (err.code ==='ER_CON_COUNT_ERROR'){
            console.error('Database has too many connections.')
        }
        if (err.code === 'ECONNREFUSED'){
            console.error('Database connection was refused.')
        }
        console.log(err);
    }
    if (connection) connection.release()
    return
})

//Promisify for Node.js async/awit.
pool.query = util.promisify(pool.query);

module.exports.pool = pool;