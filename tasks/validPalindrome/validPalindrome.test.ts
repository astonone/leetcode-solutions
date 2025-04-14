import {isPalindrome} from "./validPalindrome";

describe('Valid Palindrome', () => {
    it('should pass test case 1', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
    });

    it('should pass test case 2', () => {
        expect(isPalindrome('race a car')).toBe(false)
    });

    it('should pass test case 3', () => {
        expect(isPalindrome(' ')).toBe(true)
    });

    it('should pass test case 4', () => {
        expect(isPalindrome('0P')).toBe(false)
    });
});
