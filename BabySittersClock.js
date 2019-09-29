class BabySittersClock {
    constructor() {

    }

    calculateHoursWorked(startTime, endTime) {
        if (endTime < startTime) {
            return (12 - startTime) + endTime; 
        }
        else {
            return endTime - startTime;
        }
    }
}

module.exports = BabySittersClock;