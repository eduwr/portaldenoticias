function NoticiasDAO(connection){
    this._connection = connection;
};

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * from noticias order by data_criacao desc', callback);
};

NoticiasDAO.prototype.getNoticia = function(id_noticia, callback){
    console.log(id_noticia.id_noticia);
    this._connection.query('SELECT * FROM noticias WHERE id_noticia=' + id_noticia.id_noticia, callback);
};

NoticiasDAO.prototype.postNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
};

NoticiasDAO.prototype.getUltimasNoticias = function(callback){
    this._connection.query('SELECT * from noticias order by data_criacao desc limit 5', callback)
};

module.exports = function(){
    return NoticiasDAO;
};