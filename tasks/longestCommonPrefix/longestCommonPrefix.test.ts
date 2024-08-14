import {longestCommonPrefix} from "./longestCommonPrefix";

describe('Longest Common Prefix', () => {

    it('should pass test case 1', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toEqual('fl');
    });

    it('should pass test case 2', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toEqual('');
    });

});
