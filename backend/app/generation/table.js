const pool = require('../../databasePool');

class GenerationTable {
    static storeGeneration(generation) {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO generation(expiration) VALUES($1) RETERNING id',
                [generation.expitation],
                (error, response) => {
                    if (error) return reject(error);
                    // if (error) return console.error(error);
    
                    const generationId = response.rows[0].id;

                    resolve({ generationId });
                    // return generationId;
                }
            );


        });
    }
}


module.exports = GenerationTable;