const BabySittersClock = require('./BabySittersClock');

class Family {
    constructor(payAmountForTimeRange) {
        this.payAmountForTimeRange = payAmountForTimeRange;
        this.sittersClock = new BabySittersClock();
    }

    chargeForBabysitting(startTime, endTime) {
        this.validateStartAndEndTimes(startTime, endTime);
        let totalPay = 0;
        let periodStart = startTime;
        let periodEnd = endTime;

        for (const [key, value] of Object.entries(this.payAmountForTimeRange)) {
            const payWindowStart = parseInt(key.split(',')[0]);
            const payWindowEnd = parseInt(key.split(',')[1]);

            if (!this.sittersClock.timeIsWithinPeriod(periodStart, payWindowStart, payWindowEnd)) {
               continue; 
            }

            periodEnd = this.sittersClock.timeIsWithinPeriod(periodEnd, payWindowStart, payWindowEnd) ? periodEnd : payWindowEnd;
            const hoursInPayWindow = this.sittersClock.calculateHoursWorked(periodStart, periodEnd);

            totalPay += hoursInPayWindow * value;
            if (this.sittersClock.timeIsWithinPeriod(endTime, payWindowStart, payWindowEnd)) {
                break;
            }

            periodStart = payWindowEnd;
            periodEnd = endTime;
        }
        return totalPay;
    }

    validateStartAndEndTimes(startTime, endTime) {
        const earlyStartErrorMessage = 'The start time is too early. Valid start times are between 5pm and 4am';
        const lateEndErrorMessage = 'The end time is too late. Valid start times are between 5pm and 4am';

        if (startTime < 5 && endTime > 4) {
            throw new RangeError(earlyStartErrorMessage);
        }
    }
}

module.exports = Family;