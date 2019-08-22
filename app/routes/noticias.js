module.exports = function(app){
    app.get('/noticias', function(req, res){

        var connection = app.config.dbConnection();
        var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticias(function(error, result){
            res.render("noticias/noticias", {
                noticias : result
            });
        });
    });
};
