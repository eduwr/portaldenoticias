module.exports = function(app){
    app.get('/noticia', function(req, res){

        var connection = app.config.dbConnection();
        var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

        NoticiasDAO.getNoticia(function(error, result){
            res.render("noticias/noticia", {
                noticia : result
            });
        });
    });
};