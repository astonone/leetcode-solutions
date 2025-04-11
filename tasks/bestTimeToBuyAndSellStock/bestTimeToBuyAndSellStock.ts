// complexity O(N^2)
export function maxProfit(prices: number[]): number {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length - 1; j++) {
            if (prices[j] - prices[i] > maxProfit) {
                maxProfit = prices[j] - prices[i];
            }
        }
    }
    return maxProfit;
}

// complexity O(N)
export function maxProfitFast(prices: number[]): number {
    let minIdx = 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[minIdx]) {
            minIdx = i;
        }
        if (prices[i] - prices[minIdx] > maxProfit) {
            maxProfit = prices[i] - prices[minIdx];
        }
    }
    return maxProfit;
}
