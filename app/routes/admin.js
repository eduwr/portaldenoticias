const express = require('express');
const adminController = require('../controllers/adminController');

const routes = express.Router();


routes.get('/form_add_noticia', adminController.formAddNoticia);

routes.post('/noticias/salvar', adminController.validate('salvarNoticia'), adminController.postNoticia);

module.exports = routes;
