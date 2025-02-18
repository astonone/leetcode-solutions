import {mySqrt} from "./sqrtX";

describe('Sqrt(x)', () => {
    it('should pass test case 1', () => {
        expect(mySqrt(4)).toEqual(2);
    });

    it('should pass test case 2', () => {
        expect(mySqrt(8)).toEqual(2);
    });

    it('should pass test case 3', () => {
        expect(mySqrt(9)).toEqual(3);
    });

    it('should pass test case 4', () => {
        expect(mySqrt(16)).toEqual(4);
    });

    it('should pass test case 5', () => {
        expect(mySqrt(25)).toEqual(5);
    });

    it('should pass test case 6', () => {
        expect(mySqrt(0)).toEqual(0);
    });
});
