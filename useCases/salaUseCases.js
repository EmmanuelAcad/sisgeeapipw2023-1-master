const { pool } = require('../config')
const Sala = require('../entities/sala')

const getSalasDB = async () => {
    try {
        const { rows } = await
        pool.query('SELECT * FROM salas ORDER BY codigo');
        return rows.map((sala) => new Sala(sala.codigo, sala.numero,
            sala.descricao, sala.capacidade, sala.predio));
    } catch(err){
        throw "Erro: " + err;
    }
}

const addSalaDB = async (body) => {
    try {
        const { numero, descricao, capacidade, predio } = body;
        const results = await pool.query(`INSERT INTO salas (numero, descricao, capacidade, predio)
                                                VALUES ($1, $2, $3, $4)
                                                RETURNING codigo, numero, descricao, capacidade, predio`,
                                                [numero, descricao, capacidade, predio]);
        const sala = results.rows[0];

        return new Sala(sala.codigo, sala.numero, sala.descricao, sala.capacidade, sala.predio);
    }catch (err) {
        throw "Erro: " + err;
    }
}