const { REFRESH_RATE, SECONDS } = require('./config')

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
    constructor() {
        this.experation = this.calculateExpitation();

        
    }

    calculateExpitation() {
        const experationPeriod = Math.floor(Math.random() * (refreshRate/2));

        const msUntilExpiration = Math.random() < 0.5 ?
            refreshRate - experationPeriod :
            refreshRate + experationPeriod; 
        
        return new Date(Date.now() + msUntilExpiration);
    }
}