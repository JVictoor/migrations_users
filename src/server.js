const express = require('express');
const routes = require('./routes');

require('./database');/* importando a data base para funcionar no envio de dados do insominia, deixando desse jeito ele busca pelo index já, mas se necessario pode especificar o aquivo/index */

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333);