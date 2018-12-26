const express = require('express');
const GenerationEngine = require('./engine');


const app = express();
const engine = new GenerationEngine();
const PORT = 4002;

engine.start();

app.get('/dragen/new',(req, res) => {
    res.json({dragen:engine.generation.newDragon() });
});

app.listen(PORT, () => console.log(`Server Up! 
    & listening on port ${PORT}`));

// ----------------------------------

// setTimeout( () => {
//     engine.stop();
// }, 20000);



// ------------------------


// const Generation = require ('./generation');

// const generation = new Generation();

// console.log('generation', generation);

// const noobieGoobie = generation.newDragon();

// console.log('noobieGoobie', noobieGoobie );

// setTimeout(()=> {
//     const mimar = generation.newDragon();
//     console.log('mimar', mimar );
// }, 15000);

// setTimeout(()=> {
//     const zazzy = generation.newDragon();
//     console.log('zazzy', zazzy );
// }, 3000);



// ------------------
// console.log("Hello Node");
// const Dragon= require('./dragon')

// const fooey = new Dragon({ birthdate: new Date(), nickname:'fooey' });
// const baloo = new Dragon({ birthdate: new Date(), nickname:'baloo' });

// const mimar = new Dragon();
// setTimeout(() => {
//     const gooby = new Dragon();
//     console.log('gooby', gooby);
// }, 3000);

// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimar', mimar);