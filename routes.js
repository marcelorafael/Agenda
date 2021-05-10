const express = require('express');

const route = express.Router();

const { loginRequired } = require('./src/middlewares/middlewares')

const homeController = require('./src/controllers/homeCotroller');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');

// Rotas do Home
route.get('/', homeController.index);

// Rotas de login and register
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas contato
route.get('/contato', loginRequired, contatoController.index);
route.get('/contato/:id', loginRequired, contatoController.editIndex);
route.post('/contato/register', loginRequired, contatoController.register);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);


module.exports = route;