import {romanToInt} from "./romanToInteger";

describe('Roman to Integer', () => {

    it('should pass test case 1', () => {
        expect(romanToInt('III')).toEqual(3);
    });

    it('should pass test case 2', () => {
        expect(romanToInt('LVIII')).toEqual(58);
    });

    it('should pass test case 3', () => {
        expect(romanToInt('MCMXCIV')).toEqual(1994);
    });
});
