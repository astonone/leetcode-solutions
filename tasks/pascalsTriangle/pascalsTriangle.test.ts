import {generate} from "./pascalsTriangle";

describe('Pascal\'s Triangle', () => {

    it('should pass test case 1', () => {
        expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]);
    });

    it('should pass test case 2', () => {
        expect(generate(1)).toEqual([[1]]);
    });
});
