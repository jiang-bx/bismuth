/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function numDecodings_639(s: string): number {
    // 1~26
    // 一位时, 1~9
    // 两位时, 十位: 1~2, 个位: 0~6

    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < n; i++) {
        // 1 ~ 9
        const one = Number(s[i]);
        if (one >= 1 && one <= 9) {
            dp[i + 1] = dp[i];
        }

        // 10 ~ 26
        const two = i >= 1 ? Number(s[i - 1]) * 10 + Number(s[i]) : 0;
        if (two >= 10 && two <= 26) {
            dp[i + 1] += dp[i - 1];
        }
    }

    return dp[n];
}
