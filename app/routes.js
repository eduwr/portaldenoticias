const express = require('express');
const adminController = require('./controllers/adminController');
const noticiasController = require('./controllers/noticiasController');
const homeController = require('./controllers/homeController');

const routes = express.Router();

// Rotas Home
routes.get('/', homeController.home)

// Rotas do administrador
routes.get('/form_add_noticia', adminController.formAddNoticia);

routes.post('/noticias/salvar', adminController.validate('salvarNoticia'), adminController.postNoticia);


// Rotas para visualizar notícias
routes.get('/noticias', noticiasController.getNoticias);

routes.get('/noticia', noticiasController.getNoticia);


module.exports = routes;