var mysql = require('mysql');

var connectMySQL = function(){
    console.log('conexão com DB estabelecida')
    return mysql.createConnection({
        host : 'localhost',
        user: 'root',
        password: '1803',
        database: 'site_noticias',
    });
};

module.exports = function(){
    console.log('O autoload carregou o módulo de conxão com o BD')
    return connectMySQL;
};