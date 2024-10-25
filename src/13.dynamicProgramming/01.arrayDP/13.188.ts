/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function maxProfit_188_1(k: number, prices: number[]): number {
    const n = prices.length;
    const kLen = 2 * k + 1;
    const dp = new Array(n).fill(0).map(() => {
        return new Array(kLen).fill(0).map((_, index) => {
            return index % 2 === 1 ? -prices[0] : 0;
        });
    });

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < kLen; j++) {
            // -prices[i] -> 买入
            const val = j % 2 === 1 ? -prices[i] : prices[i];
            dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + val);
        }
    }

    return dp[n - 1][kLen - 1];
}

export function maxProfit_188(k: number, prices: number[]): number {
    const n = prices.length;
    const kLen = 2 * k + 1;
    const dp = new Array(kLen).fill(0).map((_, index) => {
        return index % 2 === 1 ? -prices[0] : 0;
    });

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < kLen; j++) {
            // -prices[i] -> 买入
            const val = j % 2 === 1 ? -prices[i] : prices[i];
            dp[j] = Math.max(dp[j], dp[j - 1] + val);
        }
    }

    return dp[kLen - 1];
}
