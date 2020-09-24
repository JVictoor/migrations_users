const express = require('express');
const UserController= require('./controllers/UserController');/* importando a controller para as rotas */

const routes=express.Router();
/* criando a rota para cadastro de usuario */
routes.post('/users',UserController.store); /* chamando nessa rota o "UserController" */

module.exports=routes;