const express = require('express');

const route = express.Router();

<<<<<<< HEAD
const { loginRequired } = require('./src/middlewares/middlewares')

const homeController = require('./src/controllers/homeCotroller');
const loginController = require('./src/controllers/loginController');
const contatoController = require('./src/controllers/contatoController');
=======
const homeController = require('./src/controllers/homeCotroller');
const loginController = require('./src/controllers/loginController');
>>>>>>> afe11a4c37f81d16f4be2c8747720e3f1ea55770

// Rotas do Home
route.get('/', homeController.index);

<<<<<<< HEAD
// Rotas de login and register
=======
// Rotas de login
>>>>>>> afe11a4c37f81d16f4be2c8747720e3f1ea55770
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

<<<<<<< HEAD
// Rotas contato
route.get('/contato', loginRequired, contatoController.index);
route.get('/contato/:id', loginRequired, contatoController.editIndex);
route.post('/contato/register', loginRequired, contatoController.register);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);


=======
>>>>>>> afe11a4c37f81d16f4be2c8747720e3f1ea55770
module.exports = route;