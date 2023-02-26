class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.check = this.max - Math.floor((this.max - this.min) / 2);
        return this.check;
    }

    lower() {
        this.max =  this.check;
    }

    greater() {
        this.min =  this.check;
    }
}

module.exports = GuessingGame;
