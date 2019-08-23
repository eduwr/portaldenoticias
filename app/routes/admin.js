module.exports = (app) => {
    app.get('/form_add_noticia'), (req, res) => {
        app.app.controllers.adminController.formAddNoticia(app, req, res);
    };

    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.adminController.salvarNoticia(app, req, res)
    });
};
