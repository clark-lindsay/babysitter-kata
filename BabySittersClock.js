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
        const hourOfTimeOne = Math.floor(timeOne);
        const hourOfTimeTwo = Math.floor(timeTwo);

        if (this.times.indexOf(hourOfTimeOne) < this.times.indexOf(hourOfTimeTwo)) {
            return true;
        }
        else if (timeOne < timeTwo && hourOfTimeOne === hourOfTimeTwo) {
            return true;
        }
        else {
            return false;
        }
    }

    startAndEndTimesAreValid(startTime, endTime) {
        if (!this.isEarlierThan(startTime, endTime)) {
            return false;
        }
        else {
            return true;
        }
    }
}

module.exports = BabySittersClock;