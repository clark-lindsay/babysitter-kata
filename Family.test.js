const family = require('./Family');

describe('the calculate pay function', () => {
    it('pays 15 for one hour with family A before 11pm', () => {
        const familyA = new family({ [[5, 11]]: 15, [[11, 4]]: 20 });
        const nigthsPay = familyA.chargeForBabysitting(5, 6);

        expect(nigthsPay).toEqual(15);
    });

    it('pays the hourly rate, per hour of time babysitting, before midnight', () => {
        const familyA = new family({ [[5, 11]]: 15, [[11, 4]]: 20 });
        const nigthsPay = familyA.chargeForBabysitting(5, 11);

        expect(nigthsPay).toEqual(90);
    });

    it('pays different hourly rates throughout the night, including past midnight', () => {
        const familyA = new family({ [[5, 11]]: 15, [[11, 4]]: 20 });
        const paycheckOne = familyA.chargeForBabysitting(5, 4);
        const paycheckTwo = familyA.chargeForBabysitting(7, 2);

        expect(paycheckOne).toEqual(190);
        expect(paycheckTwo).toEqual(120);
    });

    it('can skip a pay window entirely, without negatively impacting pay', () => {
        const familyA = new family({ [[5, 11]]: 15, [[11, 4]]: 20 });
        const paycheck = familyA.chargeForBabysitting(12, 2);

        expect(paycheck).toEqual(40);
    });

    it('pays for fractional hours as if they are whole hours', () => {
        const familyA = new family({ [[5, 11]]: 15, [[11, 4]]: 20 });
        const paycheckOne = familyA.chargeForBabysitting(8, 9.5);
        const paycheckTwo = familyA.chargeForBabysitting(7, 2.5);

        expect(paycheckOne).toEqual(30);
        expect(paycheckTwo).toEqual(140);
    });
});