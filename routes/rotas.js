const { Router } = require('express');

const { getPredios } = require('../controllers/prediosController')

const rotas = new Router();

rotas.route('/predios')
     .get(getPredios);

module.exports = rotas;