const BabySittersClock = require("./BabySittersClock");

describe("BabySittersClock", () => {
  test("it can calculate one hour worked", () => {
    const clock = new BabySittersClock();

    expect(clock.calculateHoursWorked(5, 6)).toEqual(1);
  });

  test("it can calculate multiple hours worked", () => {
    const clock = new BabySittersClock();

    expect(clock.calculateHoursWorked(5, 6)).toEqual(1);
    expect(clock.calculateHoursWorked(5, 11)).toEqual(6);
    expect(clock.calculateHoursWorked(7, 2)).toEqual(7);
    expect(clock.calculateHoursWorked(5, 4)).toEqual(11);
  });

  test("it calculates hours worked counting partial hours as whole hours", () => {
    const clock = new BabySittersClock();

    expect(clock.calculateHoursWorked(5.75, 7)).toEqual(2);
    expect(clock.calculateHoursWorked(6, 8.25)).toEqual(3);
    expect(clock.calculateHoursWorked(5.75, 3.75)).toEqual(11);
  });

  test("it will throw an error if asked to calculate the hours worked for an invalid time period", () => {
    const clock = new BabySittersClock();

    expect(() => clock.calculateHoursWorked(11, 4.5)).toThrow(RangeError);
    expect(() => clock.calculateHoursWorked(4, 8)).toThrow(RangeError);
  });

  test("it can tell you if one time is earlier than another", () => {
    const clock = new BabySittersClock();

    expect(clock.isEarlierThan(5, 2)).toEqual(true);
    expect(clock.isEarlierThan(2, 5)).toEqual(false);
    expect(clock.isEarlierThan(6.5, 6)).toEqual(false);
    expect(clock.isEarlierThan(6, 6.5)).toEqual(true);
  });

  test("it can validate that the end time is not before the start time", () => {
    const clock = new BabySittersClock();

    expect(clock.startAndEndTimesAreValid(5, 4)).toEqual(true);
    expect(clock.startAndEndTimesAreValid(5, 6)).toEqual(true);
    expect(clock.startAndEndTimesAreValid(10, 7)).toEqual(false);
    expect(clock.startAndEndTimesAreValid(10, 2)).toEqual(true);
    expect(clock.startAndEndTimesAreValid(3, 5)).toEqual(false);
  });

  test("it can validate that a start and end time fall within 5pm and 4am", () => {
    const clock = new BabySittersClock();

    expect(clock.startAndEndTimesAreValid(12, 4.5)).toEqual(false);
    expect(clock.startAndEndTimesAreValid(10, 5)).toEqual(false);
    expect(clock.startAndEndTimesAreValid(4, 6)).toEqual(false);
    expect(clock.startAndEndTimesAreValid(2, 4.25)).toEqual(false);
  });

  test("it can determine if a given time sits in a particular range", () => {
    const clock = new BabySittersClock();

    expect(clock.timeIsWithinPeriod(6, 5, 7)).toEqual(true);
    expect(clock.timeIsWithinPeriod(5, 6, 7)).toEqual(false);
    expect(clock.timeIsWithinPeriod(1, 10, 2)).toEqual(true);
    expect(clock.timeIsWithinPeriod(6.5, 6, 7)).toEqual(true);
    expect(clock.timeIsWithinPeriod(5.75, 5, 4)).toEqual(true);
    expect(clock.timeIsWithinPeriod(5, 5, 4)).toEqual(true);
    expect(clock.timeIsWithinPeriod(4, 11, 4)).toEqual(true);
  });
});
