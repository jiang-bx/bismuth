/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function longestValidParentheses(s: string): number {
    const n = s.length;
    const dp = new Array(n).fill(0);
    let ans = 0;

    for (let i = 1; i < n; i++) {
        // 符合条件的括号一定是结尾有效
        if (s[i] === ")") {
            if (s[i - 1] === "(") {
                dp[i] = 2;
                if (i - 2 >= 0) {
                    dp[i] += dp[i - 2];
                }
            } else if (dp[i - 1] > 0) {
                if (i - dp[i - 1] - 1 >= 0 && s[i - dp[i - 1] - 1] === "(") {
                    dp[i] = dp[i - 1] + 2;
                    if (i - dp[i - 1] - 2 >= 0) {
                        dp[i] += dp[i - dp[i - 1] - 2];
                    }
                }
            }
        }

        ans = Math.max(ans, dp[i]);
    }

    return ans;
}
