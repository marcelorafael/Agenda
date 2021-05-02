const express = require('express');

const route = express.Router();

const homeController = require('./src/controllers/homeCotroller');
const loginController = require('./src/controllers/loginController');
const registerController = require('./src/controllers/registerController');

// Rotas do Home
route.get('/', homeController.index);

// Routes login

route.get('/login', loginController.index);
route.get('/register', registerController.index);
route.post('/register/register', registerController.register);

module.exports = route;