const { Router } = require('express');

const { getPredios, addPredio, updatePredio, deletePredio, getPredioPorCodigo } = require('../controllers/prediosController')

const rotas = new Router();

rotas.route('/predios')
     .get(getPredios)
     .post(addPredio)
     .put(updatePredio);

rotas.route('/predios/:codigo')
     .get(getPredioPorCodigo)
     .delete(deletePredio);

module.exports = rotas;