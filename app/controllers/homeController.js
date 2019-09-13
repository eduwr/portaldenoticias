const dbConnection = require('../../config/dbConnection');
const NoticiasDAO = require('../models/NoticiasDAO')();

module.exports.home = (req, res) => {
    var connection = dbConnection();
    var noticiasDAO = new NoticiasDAO(connection());

    noticiasDAO.getUltimasNoticias((error, result) => {
        res.render("home/index", { noticias: result });
    });
};