var mysql = require('mysql');

var connectMySQL = function(){
    return mysql.createConnection({
        host : 'localhost',
        user: 'root',
        password: '1803',
        database: 'portal_noticias',
    });
};

module.exports = function(){
    return connectMySQL;
};