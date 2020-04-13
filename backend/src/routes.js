const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentsControlle');
const ProfilleController = require('./controllers/ProfilleController');
const SessionController = require('./controllers/SessionController');
const connection =  require('./database/connection');

const routes = express.Router();

routes.post('/sessions', SessionController.create);


//CHAMA O MÉTODO "create" lá da controller da OngController.js 
routes.post('/ongs', OngController.create)
//CHAMA O MÉTODO "index" lá da controller da OngController.js. SERÁ USADA APENAS PELO OS DESENVOLVEDORES, PARA CONFERÊNCIA DE DADOS
routes.get('/ongs', OngController.index)
//CHAMA O MÉTODO "create" lá da controller da IncidentsController.js 
routes.post('/incidents', IncidentsController.create);
//CHAMA O MÉTODO "index" lá da controller da IncidentsController.js.
routes.get('/incidents', IncidentsController.index);
//CHAMA O MÉTODO "delete" LÁ DA CONTROLLER IncidentsController.js
routes.delete('/incidents/:id', IncidentsController.delete);
//CHAMA O MÉTODO "index" lá da controller da ProfilleController.js. 
routes.get('/profille', ProfilleController.index);

module.exports = routes;