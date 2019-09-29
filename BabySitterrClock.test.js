const BabySittersClock = require('./BabySittersClock');

describe('BabySittersClock', () => {
    test('it can calculate one hour worked', () => {
        const clock = new BabySittersClock();

        expect(clock.calculateHoursWorked(5, 6)).toEqual(1);
    });
});