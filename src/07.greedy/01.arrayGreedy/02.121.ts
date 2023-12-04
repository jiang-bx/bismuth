export function maxProfit(prices: number[]): number {
    // let buyPrice = Infinity;
    // let sellPrice = 0;
    // let profit = 0;
    // for (let i = 0; i < prices.length; i++) {
    //     const cur = prices[i];

    //     if (cur < buyPrice) {
    //         buyPrice = cur;
    //         sellPrice = 0;
    //     } else {
    //         if (cur > sellPrice) {
    //             sellPrice = cur;
    //             profit = Math.max(profit, sellPrice - buyPrice);
    //         }
    //     }
    // }

    // return profit;

    // 贪心 优化
    let min = Infinity;
    let profit = 0;

    for (let i = 0; i < prices.length; i++) {
        // 取到左侧最小值, 买入价格
        min = Math.min(min, prices[i]);

        // 取到右侧卖出价格 - 买入价格, 找到最大利润
        profit = Math.max(profit, prices[i] - min);
    }

    return profit;
}
