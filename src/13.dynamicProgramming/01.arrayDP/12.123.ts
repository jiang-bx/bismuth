/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function maxProfit_123_1(prices: number[]): number {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(() => {
        return new Array(5).fill(0);
    });

    dp[0][1] = -prices[0];
    dp[0][3] = -prices[0];

    for (let i = 1; i < n; i++) {
        dp[i][0] = dp[i - 1][0];
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
        dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
        dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
        dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
    }

    return dp[n - 1][4];
}

export function maxProfit_123(prices: number[]): number {
    const n = prices.length;
    let a1 = -prices[0];
    let b1 = 0;
    let a2 = -prices[0];
    let b2 = 0;

    for (let i = 1; i < n; i++) {
        a1 = Math.max(a1, 0 - prices[i]);
        b1 = Math.max(b1, a1 + prices[i]);
        a2 = Math.max(a2, b1 - prices[i]);
        b2 = Math.max(b2, a2 + prices[i]);
    }

    return b2;
}
