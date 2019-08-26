const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();
const routesAdmin = require('../app/routes/admin');

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({
    extended:true,
}));

app.use(express.json())
app.use(routesAdmin);

// consign( { cwd : 'app'})
//     .include('routes')
// //     .then('config/dbConnection.js')
// //     .then('app/models')
// //     .then('app/controllers')
//     .into(app);

module.exports = app;