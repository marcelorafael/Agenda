const express = require('express');

const route = express.Router();

const homeController = require('./src/controllers/homeCotroller');
const loginController = require('./src/controllers/loginController');

// Rotas do Home
route.get('/', homeController.index);

// Rotas de login
route.get('/login', loginController.index);
route.post('/login/register', loginController.register);

module.exports = route;