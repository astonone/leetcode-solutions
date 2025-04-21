import {majorityElement} from "./majorityElement";

describe('Majority Element', () => {

    it('should pass test case 1', () => {
        expect(majorityElement([3,2,3])).toEqual(3);
    });

    it('should pass test case 2', () => {
        expect(majorityElement([2,2,1,1,1,2,2])).toEqual(2);
    });
});
