const TRAITS = require('../../data/traits');

const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    generationId: undefined,
    // birthdate: new Date()
    get birthdate() {
        return new Date();
    },
    get randomTraits() {
        const traits =[];
        TRAITS.forEach(TRAIT => {
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;

            const traitValue = traitValues[
                Math.floor(Math.random() * traitValues.length)
            ];

            traits.push({traitType, traitValue,})
        });
        return traits;
    }
}

class Dragon {
    constructor({ birthdate, nickname, traits } = {}) {
        //the added{} allows for avoiding the order issues that can arize in big projects.
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname= nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId|| DEFAULT_PROPERTIES.generationId;

    }
}
module.exports = Dragon;