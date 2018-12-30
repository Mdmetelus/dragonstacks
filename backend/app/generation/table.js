const pool = require('../../databasePool');

class GenerationTable {
    static storeGeneration(generation) {
        pool.query(
            'INSERT INTO generation(expiration) VALUES($1) RETERNING id',
            [generation.expitation],
            (error, response) => {
                if (error) return console.error(error);

                const generationId = response.rows[0].id;
            }
        );
    }
}


module.exports = GenerationTable;