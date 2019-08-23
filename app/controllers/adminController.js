const { check, validationResult } = require('express-validator');

module.exports.formAddNoticia = (app, req, res) => {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {}});
};

module.exports.salvarNoticia = (app, check, req, res) => {
    const noticia = req.body;
    const check = [
        check('titulo', 'Título é obrigatório').not().isEmpty(),
        check('resumo', 'Resumo é obrigatório').not().isEmpty(),
        check('resumo', 'Resumo tem que ter entre 8 e 100 caracteres').isLength({ min: 1, max: 100 }),
        check('autor', 'Autor tem que ter entre 8 e 30 caracteres').isLength({ min: 1, max: 30 }),
        check('autor', 'Autor é obrigatório').not().isEmpty(),
        check('data_noticia', 'Data é obrigatório').not().isEmpty(),
        check('noticia', 'O conteúdo tem que ter entre 8 e 100 caracteres').isLength({ min: 1, max: 100 }),
    ];
    const errors = validationResult(req);
            
    if (!errors.isEmpty()){
        res.render('admin/form_add_noticia', { validacao: errors.array(), noticia: noticia });
        return console.log(noticia);
    };

    var connection = app.config.dbConnection();
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection);

    NoticiasDAO.postNoticia(noticia, function(error, result){
        res.redirect('/noticias');
    });
};