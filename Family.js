class Family {
    constructor(payAmountForTimeRange) {
        this.payAmountForTimeRange = payAmountForTimeRange;
    }

    chargeForBabysitting(startTime, endTime) {
        console.log(this.payAmountForTimeRange);
        let hoursWorked = this.calculateHoursWorked(startTime, endTime);
        let totalPay = 0;
        for (const [key, value] of Object.entries(this.payAmountForTimeRange)) {
            const payWindowHours = this.calculateHoursWorked(parseInt(key.split(',')[0]), parseInt(key.split(',')[1]));
            console.log(parseInt(key.split(',')[0]));
            const hoursInPayWindow = Math.min(payWindowHours, hoursWorked);

            totalPay += hoursInPayWindow * value;
            hoursWorked -= hoursInPayWindow;
        }
        return totalPay;
    }

    calculateHoursWorked(startTime, endTime) {
        if (endTime < startTime) {
            return endTime + 7; 
        }
        else {
            return endTime - startTime;
        }
    }
}

module.exports = Family;