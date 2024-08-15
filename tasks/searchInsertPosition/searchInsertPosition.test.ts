import {searchInsert, searchInsertLinear} from "./searchInsertPosition";

describe('Search Insert Position', () => {

    describe('Search Insert Position in O(N)', () => {
        it('should pass test case 1 with O(N)', () => {
            expect(searchInsertLinear([1, 3, 5, 6], 5)).toEqual(2);
        });

        it('should pass test case 2 with O(N)', () => {
            expect(searchInsertLinear([1, 3, 5, 6], 2)).toEqual(1);
        });

        it('should pass test case 3 with O(N)', () => {
            expect(searchInsertLinear([1, 3, 5, 6], 7)).toEqual(4);
        });
    });

    describe('Search Insert Position in O(log(N))', () => {
        it('should pass test case 1 with O(log(N))', () => {
            expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);
        });

        it('should pass test case 2 with O(log(N))', () => {
            expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
        });

        it('should pass test case 3 with O(log(N))', () => {
            expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
        });
    });
});
