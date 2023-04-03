const { getPrediosDB } = require('../useCases/predioUseCases');

const getPredios = async (request, response) => {
    await getPrediosDB()
          .then(data => response.status(200).json(data))
          .catch(err => {
            response.status(400).json({
                status : 'error',
                message : 'Erro ao consultar os prédios: ' + err
            })
          })
}

module.exports = { getPredios }