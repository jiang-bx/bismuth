export function maxProfit1(prices: number[]): number {
    // 贪心 优化
    let min = Number.MAX_SAFE_INTEGER;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        // 找到最小值
        min = Math.min(min, prices[i]);

        // 贪心点, 能卖出的话就卖出, 然后在买入
        if (prices[i] > min) {
            profit += prices[i] - min;
            min = prices[i];
        }
    }

    return profit;
}
