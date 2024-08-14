import {removeElement} from "./removeElement";

describe('Remove Element', () => {

    it('should pass test case 1', () => {
        let arr = [3, 2, 2, 3];
        const k = removeElement(arr, 3)
        expect(k).toEqual(2);
        expect(arr).toEqual([2, 2, '_', '_']);
    });

    it('should pass test case 2', () => {
        let arr = [0, 1, 2, 2, 3, 0, 4, 2];
        const k = removeElement(arr, 2)
        expect(k).toEqual(5);
        expect(arr).toEqual([0, 1, 4, 0, 3, '_', '_', '_']);
    });
});
