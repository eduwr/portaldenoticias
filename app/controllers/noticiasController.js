const dbConnection = require('../../config/dbConnection');
const NoticiasDAO = require('../models/NoticiasDAO')();


module.exports.getNoticias = (req, res) => {
    var connection = dbConnection();
    var noticiasDAO = new NoticiasDAO(connection());

    noticiasDAO.getNoticias((error, result) => {
        res.render("noticias/noticias", {
            noticias : result
        });
    });
};

module.exports.getNoticia = (req, res) => {
    var connection = dbConnection();
    var noticiasDAO = new NoticiasDAO(connection());
   
    const id_noticia = req.query;

    noticiasDAO.getNoticia(id_noticia, (error, result) => {
        res.render("noticias/noticia", {
            noticia : result
        });
    });
};