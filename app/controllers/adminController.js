const { check, validationResult } = require('express-validator');
const dbConnection = require('../../config/dbConnection');
const NoticiasDAO = require('../models/NoticiasDAO')();

module.exports.formAddNoticia = (req, res) => {
    res.render("admin/form_add_noticia", { validacao: {}, noticia: {}});
};

module.exports.validate = (method) => {
    switch(method){
        case 'salvarNoticia': {
            return [
                check('titulo', 'Título é obrigatório').not().isEmpty(),
                check('resumo', 'Resumo é obrigatório').not().isEmpty(),
                check('resumo', 'Resumo tem que ter entre 8 e 100 caracteres').isLength({ min: 1, max: 100 }),
                check('autor', 'Autor tem que ter entre 8 e 30 caracteres').isLength({ min: 1, max: 30 }),
                check('autor', 'Autor é obrigatório').not().isEmpty(),
                check('data_noticia', 'Data é obrigatório').not().isEmpty(),
                check('noticia', 'O conteúdo tem que ter entre 8 e 100 caracteres').isLength({ min: 1, max: 100 }),
            ]
        };
    };
};    

module.exports.postNoticia = (req, res) => {
    
    const noticia = req.body;
    const errors = validationResult(req);
            
    if (!errors.isEmpty()){
        res.render('admin/form_add_noticia', { validacao: errors.array(), noticia: noticia });
        return
    };

    var connection = dbConnection();
    var noticiasDAO = new NoticiasDAO(connection());

    noticiasDAO.postNoticia(noticia, (error, result) => {
        res.redirect('/noticias');
    })
}