class BabySittersClock {
  constructor() {
    this.times = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4];
  }

  calculateHoursWorked(startTime, endTime) {
    if (!this.startAndEndTimesAreValid(startTime, endTime)) {
      throw new RangeError(
        "Valid start and end times must be between 5pm and 4am, inclusive."
      );
    }

    const effectiveStartingHour = Math.floor(startTime);
    const effectiveEndingHour = Math.ceil(endTime);
    if (endTime < startTime) {
      return 12 - effectiveStartingHour + effectiveEndingHour;
    } else {
      return effectiveEndingHour - effectiveStartingHour;
    }
  }

  isEarlierThan(timeOne, timeTwo) {
    const hourOfTimeOne = Math.floor(timeOne);
    const hourOfTimeTwo = Math.floor(timeTwo);

    if (this.times.indexOf(hourOfTimeOne) < this.times.indexOf(hourOfTimeTwo)) {
      return true;
    } else if (timeOne < timeTwo && hourOfTimeOne === hourOfTimeTwo) {
      return true;
    } else {
      return false;
    }
  }

  startAndEndTimesAreValid(startTime, endTime) {
    if (!this.isEarlierThan(startTime, endTime)) {
      return false;
    } else if (endTime > 4 && endTime < 5) {
      return false;
    } else if (startTime < 5 && startTime > 4) {
      return false;
    } else {
      return true;
    }
  }

  timeIsWithinPeriod(time, periodStartTime, periodEndTime) {
    if (
      (this.isEarlierThan(time, periodEndTime) || time === periodEndTime) &&
      !this.isEarlierThan(time, periodStartTime)
    ) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = BabySittersClock;
