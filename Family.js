class Family {
    constructor(payAmountForTimeRange) {
        this.payAmountForTimeRange = payAmountForTimeRange;
    }

    chargeForBabysitting(startTime, endTime) {
        let totalPay = 0;
        let periodStart = startTime;
        let periodEnd = endTime;

        for (const [key, value] of Object.entries(this.payAmountForTimeRange)) {
            const payWindowStart = parseInt(key.split(',')[0]);
            const payWindowEnd = parseInt(key.split(',')[1]);

            if (!this.timeIsWithinPeriod(periodStart, payWindowStart, payWindowEnd)) {
                console.log(`The time ${periodStart} is not within the window of [${payWindowStart}, ${payWindowEnd}]`);
               continue; 
            }

            periodEnd = this.timeIsWithinPeriod(periodEnd, payWindowStart, payWindowEnd) ? periodEnd : payWindowEnd;
            const hoursInPayWindow = this.calculateHoursWorked(periodStart, periodEnd);
            console.log(`Hours in pay window: ${hoursInPayWindow} at a rate of: ${value}`);

            totalPay += hoursInPayWindow * value;
            periodStart = payWindowEnd;
            periodEnd = endTime;
            if (this.timeIsWithinPeriod(endTime, payWindowStart, payWindowEnd)) {
                break;
            }
        }
        return totalPay;
    }

    calculateHoursWorked(startTime, endTime) {
        if (endTime < startTime) {
            return (12 - startTime) + endTime; 
        }
        else {
            return endTime - startTime;
        }
    }

    timeIsWithinPeriod(time, periodStart, periodEnd) {
        if (time >= periodStart && time <= periodEnd) {
            return true;
        }
        else if (time >= periodStart && time >= periodEnd && periodStart > periodEnd)
        {
            return true;
        }
        else if (time <= periodStart && time <= periodEnd && periodStart > periodEnd) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = Family;