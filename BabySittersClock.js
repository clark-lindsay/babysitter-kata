class BabySittersClock {
    constructor() {
        this.times = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4];
    }

    calculateHoursWorked(startTime, endTime) {
        if (endTime < startTime) {
            return (12 - startTime) + endTime; 
        }
        else {
            return endTime - startTime;
        }
    }

    isEarlierThan(timeOne, timeTwo) {
        if (this.times.indexOf(timeOne) < this.times.indexOf(timeTwo)) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = BabySittersClock;