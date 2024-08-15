import {merge, mergeLog} from "./mergeSortedArray";

describe('Merge Sorted Array', () => {

    describe('Time complexity O((N+M)ˆ2)', () => {
        it('should pass test case 1', () => {
            const num1 = [1, 2, 3, 0, 0, 0];
            const num2 = [2, 5, 6];
            merge(num1, 3, num2, 3);
            expect(num1).toEqual([1, 2, 2, 3, 5, 6]);
            expect(num2).toEqual([2, 5, 6]);
        });

        it('should pass test case 2', () => {
            const num1 = [1];
            const num2: number[] = [];
            merge(num1, 1, num2, 0);
            expect(num1).toEqual([1]);
            expect(num2).toEqual([]);
        });

        it('should pass test case 3', () => {
            const num1 = [0];
            const num2 = [1];
            merge(num1, 0, num2, 1);
            expect(num1).toEqual([1]);
            expect(num2).toEqual([1]);
        });

        it('should pass test case 4', () => {
            const num1 = [-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0];
            const num2 = [-1, -1, 0, 0, 1, 2];
            merge(num1, 5, num2, 6);
            expect(num1).toEqual([-1, -1, -1, 0, 0, 0, 0, 0, 1, 2, 3]);
            expect(num2).toEqual([-1, -1, 0, 0, 1, 2]);
        });

        it('should pass test case 5', () => {
            const num1 = [0, 0, 0, 0, 0];
            const num2 = [1, 2, 3, 4, 5];
            merge(num1, 0, num2, 5);
            expect(num1).toEqual([1, 2, 3, 4, 5]);
            expect(num2).toEqual([1, 2, 3, 4, 5]);
        });
    });

    describe('Time complexity O((N+M) * log(M + N)', () => {
        it('should pass test case 1', () => {
            const num1 = [1, 2, 3, 0, 0, 0];
            const num2 = [2, 5, 6];
            mergeLog(num1, 3, num2, 3);
            expect(num1).toEqual([1, 2, 2, 3, 5, 6]);
            expect(num2).toEqual([2, 5, 6]);
        });

        it('should pass test case 2', () => {
            const num1 = [1];
            const num2: number[] = [];
            mergeLog(num1, 1, num2, 0);
            expect(num1).toEqual([1]);
            expect(num2).toEqual([]);
        });

        it('should pass test case 3', () => {
            const num1 = [0];
            const num2 = [1];
            mergeLog(num1, 0, num2, 1);
            expect(num1).toEqual([1]);
            expect(num2).toEqual([1]);
        });

        it('should pass test case 4', () => {
            const num1 = [-1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0];
            const num2 = [-1, -1, 0, 0, 1, 2];
            mergeLog(num1, 5, num2, 6);
            expect(num1).toEqual([-1, -1, -1, 0, 0, 0, 0, 0, 1, 2, 3]);
            expect(num2).toEqual([-1, -1, 0, 0, 1, 2]);
        });

        it('should pass test case 5', () => {
            const num1 = [0, 0, 0, 0, 0];
            const num2 = [1, 2, 3, 4, 5];
            mergeLog(num1, 0, num2, 5);
            expect(num1).toEqual([1, 2, 3, 4, 5]);
            expect(num2).toEqual([1, 2, 3, 4, 5]);
        });
    })

});
