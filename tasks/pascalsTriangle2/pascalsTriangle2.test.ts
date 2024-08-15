import {getRow} from "./pascalsTriangle2";

describe('Pascal\'s Triangle 2', () => {

    it('should pass test case 1', () => {
        expect(getRow(3)).toEqual([1, 3, 3, 1]);
    });

    it('should pass test case 2', () => {
        expect(getRow(0)).toEqual([1]);
    });

    it('should pass test case 3', () => {
        expect(getRow(1)).toEqual([1, 1]);
    });
});
