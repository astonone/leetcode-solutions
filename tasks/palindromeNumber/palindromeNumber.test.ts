import {isPalindrome} from "./palindromeNumber";


describe('Palindrome Number', () => {

    it('should pass test case 1', () => {
        expect(isPalindrome(121)).toEqual(true);
    });

    it('should pass test case 2', () => {
        expect(isPalindrome(-121)).toEqual(false);
    });

    it('should pass test case 3', () => {
        expect(isPalindrome(10)).toEqual(false);
    });
});
