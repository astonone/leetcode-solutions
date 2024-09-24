import {addBinary} from "./addBinary";

describe('Add Binary', () => {

    it('should pass test case 1', () => {
        expect(addBinary("11", "1")).toEqual("100");
    });

    it('should pass test case 2', () => {
        expect(addBinary("1010", "1011")).toEqual("10101");
    });

    it('should pass test case 3', () => {
        expect(addBinary("1111", "1111")).toEqual("11110");
    });
});
