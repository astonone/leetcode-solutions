import {lengthOfLastWord} from "./lengthOfLastWord";

describe('Length of Last Word', () => {

    it('should pass test case 1', () => {
        expect(lengthOfLastWord("Hello World")).toEqual(5);
    });

    it('should pass test case 2', () => {
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
    });

    it('should pass test case 3', () => {
        expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
    });

});
