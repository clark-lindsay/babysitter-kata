class Family {
    constructor(payAmountForTimeRange) {
        this.payAmountForTimeRange = payAmountForTimeRange;
    }

    chargeForBabysitting(startTime, endTime) {
        let hoursWorked = endTime - startTime;

        return hoursWorked * 15;
    }
}

module.exports = Family;