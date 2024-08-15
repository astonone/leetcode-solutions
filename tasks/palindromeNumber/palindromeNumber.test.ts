import {isPalindrome, isPalindromeSimple} from "./palindromeNumber";


describe('Palindrome Number', () => {

    describe('Palindrome Number without string conversion', () => {
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

    describe('Palindrome Number with string conversion', () => {
        it('should pass test case 1 with simpleSolution', () => {
            expect(isPalindromeSimple(121)).toEqual(true);
        });

        it('should pass test case 2 with simpleSolution', () => {
            expect(isPalindromeSimple(-121)).toEqual(false);
        });

        it('should pass test case 3 with simpleSolution', () => {
            expect(isPalindromeSimple(10)).toEqual(false);
        });
    });

});
