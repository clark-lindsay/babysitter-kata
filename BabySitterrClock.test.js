const BabySittersClock = require('./BabySittersClock');

describe('BabySittersClock', () => {
    test('it can calculate one hour worked', () => {
        const clock = new BabySittersClock();

        expect(clock.calculateHoursWorked(5, 6)).toEqual(1);
    });

    test('it can calculate multiple hours worked', () => {
        const clock = new BabySittersClock();

        expect(clock.calculateHoursWorked(5, 6)).toEqual(1);
        expect(clock.calculateHoursWorked(5, 11)).toEqual(6);
        expect(clock.calculateHoursWorked(7, 2)).toEqual(7);
        expect(clock.calculateHoursWorked(5, 4)).toEqual(11);
    });

    test('it can tell you if one time is earlier than another', () => {
        const clock = new BabySittersClock();

        expect(clock.isEarlierThan(5, 2)).toEqual(true);
        expect(clock.isEarlierThan(2, 5)).toEqual(false);
    });
});