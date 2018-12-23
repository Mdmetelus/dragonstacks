const DEFAULT_PROPERTIES = {
    nickname: 'unnamed',
    // birthdate: new Date()
    get birthdate() {
        return new Date();
    }
}

class Dragon {
    constructor({ birthdate, nickname } = {}) {
        //the added{} allows for avoiding the order issues that can arize in big projects.
        this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
        this.nickname= nickname || DEFAULT_PROPERTIES.nickname;

    }
}
module.exports = Dragon;