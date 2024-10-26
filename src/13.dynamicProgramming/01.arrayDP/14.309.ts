/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function maxProfit_309(prices: number[]): number {
    const n = prices.length;
    const dp = new Array(n).fill(0).map(() => {
        return new Array(2).fill(0);
    });

    dp[0][0] = -prices[0];
    dp[0][1] = 0;

    for (let i = 1; i < n; i++) {
        dp[i][0] = Math.max(
            dp[i - 1][0],
            (i >= 2 ? dp[i - 2][1] : 0) - prices[i]
        );
        dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
    }

    return dp[n - 1][1];
}
