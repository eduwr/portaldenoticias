module.exports = function(app){
    app.get('/noticia', function(req, res){

        var connection = app.config.dbConnection();
        var noticiaModel = app.app.models.noticiasModel;

        noticiaModel.getNoticia(connection,  function(error, result){
            res.render("noticias/noticia", {
                noticia : result
            });
        });
    });
};