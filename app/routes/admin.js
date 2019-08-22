module.exports = function(app){
    app.get('/form_inclusao_noticia', function(req, res){
        res.render("admin/form_add_noticia");
    });

    //conexao
    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;
        var connection = app.config.dbConnection();
        var noticiasModel = app.app.models.noticiasModel;

        noticiasModel.postNoticia(noticia, connection, function(error, result){
            res.redirect('/noticias');
        });
        //model

        //salvar Notícia
    });
};
