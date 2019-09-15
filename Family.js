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
               continue; 
            }

            periodEnd = this.timeIsWithinPeriod(periodEnd, payWindowStart, payWindowEnd) ? periodEnd : payWindowEnd;
            const hoursInPayWindow = this.calculateHoursWorked(Math.floor(periodStart), Math.ceil(periodEnd));

            totalPay += hoursInPayWindow * value;
            if (this.timeIsWithinPeriod(endTime, payWindowStart, payWindowEnd)) {
                break;
            }

            periodStart = payWindowEnd;
            periodEnd = endTime;
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
        const clockPassesMidnight = periodStart > periodEnd;

        if (time >= periodStart && time <= periodEnd) {
            return true;
        }
        else if (time >= periodStart && time >= periodEnd && clockPassesMidnight)
        {
            return true;
        }
        else if (time <= periodStart && time <= periodEnd && clockPassesMidnight) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = Family;