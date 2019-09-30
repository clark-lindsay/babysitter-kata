const BabySittersClock = require("./BabySittersClock");

class Family {
  constructor(payAmountForTimeRange) {
    this.payAmountForTimeRange = payAmountForTimeRange;
    this.sittersClock = new BabySittersClock();
  }

  chargeForBabysitting(startTime, endTime) {
    let totalPay = 0;
    let periodStart = startTime;
    let periodEnd = endTime;

    for (const [key, value] of Object.entries(this.payAmountForTimeRange)) {
      const payWindowStart = parseInt(key.split(",")[0]);
      const payWindowEnd = parseInt(key.split(",")[1]);

      if (
        !this.sittersClock.timeIsWithinPeriod(
          periodStart,
          payWindowStart,
          payWindowEnd
        )
      ) {
        continue;
      }

      periodEnd = this.sittersClock.timeIsWithinPeriod(
        periodEnd,
        payWindowStart,
        payWindowEnd
      )
        ? periodEnd
        : payWindowEnd;
      const hoursInPayWindow = this.sittersClock.calculateHoursWorked(
        periodStart,
        periodEnd
      );

      totalPay += hoursInPayWindow * value;
      if (
        this.sittersClock.timeIsWithinPeriod(
          endTime,
          payWindowStart,
          payWindowEnd
        )
      ) {
        break;
      }

      periodStart = payWindowEnd;
      periodEnd = endTime;
    }
    return totalPay;
  }
}

module.exports = Family;
