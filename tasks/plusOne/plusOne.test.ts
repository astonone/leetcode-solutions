import {plusOne} from "./plusOne";

describe('Plus One', () => {

    it('should pass test case 1', () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
    });

    it('should pass test case 2', () => {
        expect(plusOne([4,3,2,1])).toEqual([4,3,2,2]);
    });

    it('should pass test case 3', () => {
        expect(plusOne([9])).toEqual([1,0]);
    });
});
