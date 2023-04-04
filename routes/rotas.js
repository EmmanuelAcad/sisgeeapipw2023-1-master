const { Router } = require('express');

const { getPredios, addPredio, updatePredio, deletePredio, getPredioPorCodigo } = require('../controllers/prediosController')
const { getSalas, addSala, updateSala, deleteSala, getSalaPorCodigo } = require('../controllers/salasController')

const rotas = new Router();

rotas.route('/predios')
     .get(getPredios)
     .post(addPredio)
     .put(updatePredio);

rotas.route('/predios/:codigo')
     .get(getPredioPorCodigo)
     .delete(deletePredio);


rotas.route('/salas')
     .get(getSalas)
     .post(addSala)
     .put(updateSala);

rotas.route('/salas/:codigo')
     .get(getSalaPorCodigo)
     .delete(deleteSala);

module.exports = rotas;