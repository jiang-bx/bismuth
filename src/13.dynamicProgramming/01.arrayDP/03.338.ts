/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

/**
 *   0   0
 *   1   1
 *  10   2
 *  11   3
 * 100   4
 * 101   5
 * 110   6
 * 111   7
 * 1000  8
 */

export function countBits1(n: number): number[] {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            dp[i] = dp[i - 1] + 1;
        } else {
            dp[i] = dp[i / 2];
        }
    }
    return dp;
}

export function countBits(n: number): number[] {
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1);

        // i & 1 , 且, 只要有 0 就返回 0
        // 如果 i 是奇数, 得到 1
        // 如果 i 是偶数, 得到 0

        // i >> 1 表示 i / 2
        // 如果 i 是奇数, 向下取整, 7 / 2 = 3.5 = 3
        // 如果 i 是偶数, 6 / 2 = 3
    }
    return dp;
}
