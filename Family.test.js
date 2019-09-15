const family = require('./Family');

describe('the calculate pay function', () => {
    it('pays 15 for one hour with family A before 11pm', () => {
        const familyA = new family({ 5: 15, 11: 20 });
        const nigthsPay = familyA.chargeForBabysitting(5, 6);

        expect(nigthsPay).toEqual(15);
    });

    it('pays the hourly rate, per hour of time babysitting', () => {
        const familyA = new family({ 5: 15, 11: 20 });
        const nigthsPay = familyA.chargeForBabysitting(5, 11);

        expect(nigthsPay).toEqual(90);
    });
});