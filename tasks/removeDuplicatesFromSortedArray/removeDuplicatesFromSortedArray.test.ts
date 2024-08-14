import {removeDuplicates} from "./removeDuplicatesFromSortedArray";

describe('Remove Duplicates from Sorted Array', () => {

    it('should pass test case 1', () => {
        let arr = [1,1,2];
        const k = removeDuplicates(arr)
        expect(k).toEqual(2);
        expect(arr).toEqual([1,2,'_']);
    });

    it('should pass test case 2', () => {
        let arr = [0,0,1,1,1,2,2,3,3,4];
        const k = removeDuplicates(arr)
        expect(k).toEqual(5);
        expect(arr).toEqual([0,1,2,3,4,'_','_','_','_','_']);
    });
});
