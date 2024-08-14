import {strStr} from "./findTheIndexOfTheFirstOccurrenceInString";

describe('Find the Index of the First Occurrence in a String', () => {

    it('should pass test case 1', () => {
        expect(strStr("sadbutsad", "sad")).toEqual(0);
    });

    it('should pass test case 2', () => {
        expect(strStr("leetcode", "leeto")).toEqual(-1);
    });
});
