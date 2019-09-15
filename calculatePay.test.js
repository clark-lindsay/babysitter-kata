const calculatePay = require('./calculatePay');

describe('the calculate pay function', () => {
    it('pays 15 for an hour with family A before 11pm', () => {
        const nigthsPay = calculatePay.calculatePay(5, 6, 'A');

        expect(nigthsPay).toEqual(15);
    });
});