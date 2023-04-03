const { pool } = require('../config')
const Predio = require('../entities/predio')

const getPrediosDB = async () => {
    try {
        const { rows } = await 
        pool.query('SELECT * FROM predios ORDER BY codigo');
        return rows.map((predio) => new Predio(predio.codigo, predio.nome,
            predio.descricao, predio.sigla));
    } catch(err){
        throw "Erro: " + err;
    }
}

module.exports = { getPrediosDB }