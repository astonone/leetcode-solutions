import {isAnagram, isAnagram2} from './validAnagram';

describe('isAnagram', () => {
    describe('method 1', () => {
            test('should return true for s = "anagram", t = "nagaram"', () => {
                expect(isAnagram('anagram', 'nagaram')).toBe(true);
            });

            test('should return false for s = "rat", t = "car"', () => {
                expect(isAnagram('rat', 'car')).toBe(false);
            });
        }
    );

    describe('method 2', () => {
            test('should return true for s = "anagram", t = "nagaram"', () => {
                expect(isAnagram2('anagram', 'nagaram')).toBe(true);
            });

            test('should return false for s = "rat", t = "car"', () => {
                expect(isAnagram2('rat', 'car')).toBe(false);
            });
        }
    );
});
