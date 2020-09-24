const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User'); /* importando a model */

const connection = new Sequelize(dbConfig);/* conexão com o banco de dados */

User.init(connection);/* passando a conexão para o banco de dados  */

module.exports=connection;