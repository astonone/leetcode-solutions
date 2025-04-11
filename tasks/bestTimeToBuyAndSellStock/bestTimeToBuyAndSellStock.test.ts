import {maxProfit, maxProfitFast} from "./bestTimeToBuyAndSellStock";

describe('Best Time to Buy and Sell Stock', () => {

    it('should pass test case 1', () => {
        expect(maxProfit([7,1,5,3,6,4])).toEqual(5);
    });

    it('should pass test case 2', () => {
        expect(maxProfit([7,6,4,3,1])).toEqual(0);
    });
});

describe('Best Time to Buy and Sell Stock fast', () => {

    it('should pass test case 1', () => {
        expect(maxProfitFast([7,1,5,3,6,4])).toEqual(5);
    });

    it('should pass test case 2', () => {
        expect(maxProfitFast([7,6,4,3,1])).toEqual(0);
    });

    it('should pass test case 3', () => {
        expect(maxProfitFast([7,6])).toEqual(0);
    });

    it('should pass test case 4', () => {
        expect(maxProfitFast([7])).toEqual(0);
    });

    it('should pass test case 5', () => {
        expect(maxProfitFast([2,4,1])).toEqual(2);
    });

    it('should pass test case 6', () => {
        expect(maxProfitFast([2,1,2,1,0,1,2])).toEqual(2);
    });
});
