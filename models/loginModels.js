var mysql = require('./connection').pool;

module.exports.login = function (obj, callback, next) {
    mysql.getConnection(function (err, conn) {
        if (err) {
            conn.release();
            next(err);
        }
        else conn.query("Select idUtilizador, emailUtilizador, senhaUtilizador from Utilizador where emailUtilizador=? and senhaUtilizador=?", [obj.Email, obj.Senha], function (err, rows) {
            conn.release();
            if (!(rows.length === 0)) {
                callback({ code: 200, status: "Ok" }, rows);
            }
            else {
                callback({ code: 401, status: "Email ou Senha incorreta" }, null);
            }
        })
    })
}