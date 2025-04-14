import {singleNumber} from "./singleNumber";

describe('Single Number', () => {
    it('should pass test case 1', () => {
        expect(singleNumber([2,2,1])).toEqual(1);
    });

    it('should pass test case 2', () => {
        expect(singleNumber([4,1,2,1,2])).toEqual(4);
    });

    it('should pass test case 3', () => {
        expect(singleNumber([1])).toEqual(1);
    });
});
