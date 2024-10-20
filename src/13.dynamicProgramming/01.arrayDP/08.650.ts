/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function minSteps(n: number): number {
    const dp = new Array(n + 1).fill(0).map(() => {
        return new Array(n + 1).fill(n);
    });

    dp[1][1] = 0;

    for (let i = 1; i <= n; i++) {
        let minNum = dp[i][1];

        for (let j = 1; j <= i; j++) {
            if (i - j >= 1) {
                dp[i][j] = Math.min(dp[i][j], dp[i - j][j] + 1);
                minNum = Math.min(minNum, dp[i][j]);
            }
            if (i == j) {
                dp[i][j] = minNum + 1;
            }
        }
    }

    return dp[n][n] - 1;
}
