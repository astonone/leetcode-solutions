import {isValid} from "./validParentheses";

describe('Valid Parentheses', () => {

    it('should pass test case 1', () => {
        expect(isValid('()')).toEqual(true);
    });

    it('should pass test case 2', () => {
        expect(isValid('()[]{}')).toEqual(true);
    });

    it('should pass test case 3', () => {
        expect(isValid('(]')).toEqual(false);
    });

    it('should pass test case 4', () => {
        expect(isValid('([])')).toEqual(true);
    });

    it('should pass test case 5', () => {
        expect(isValid('[')).toEqual(false);
    });

    it('should pass test case 6', () => {
        expect(isValid(']')).toEqual(false);
    });
});
