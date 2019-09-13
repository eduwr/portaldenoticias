const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require('../app/routes');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({
    extended:true,
}));

app.use(express.json())
app.use(routes);


module.exports = app;