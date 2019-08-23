function NoticiasDAO(connection){
    this._connection = connection;
};

NoticiasDAO.prototype.getNoticias = function(callback){
    this._connection.query('SELECT * from noticias', callback);
};

NoticiasDAO.prototype.getNoticia = function(callback){
    this._connection.query('SELECT * FROM noticias WHERE id_noticia=2', callback);
};

NoticiasDAO.prototype.postNoticia = function(noticia, callback){
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
    console.log(noticia);
};

module.exports = function(){
    return NoticiasDAO;
};