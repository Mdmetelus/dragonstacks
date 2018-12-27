const { Pool } = require('pg');
const databaseConfiguration = require('./secrets/databaseConfiguration')

const pool = new Pool(databaseConfiguration);

module.exports = pool;


// debugging Code
// pool.query('SELECT * FROM generation', (error, response) => {
//     if (error) return console.log('error', error);

//     console.log('response.rows', response.rows);
// })

// cammand line execution of debug code
// ./node_modules/nodemon/bin/nodemon.js databasePool.js