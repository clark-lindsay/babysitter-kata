const calculatePay = require('./calculatePay');

describe('the calculate pay function', () => {
    it('pays 15 for an hour with family A before 11pm', () => {
        calculatePay(5, 6, 'A');
    });
});