/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function nthUglyNumber(n: number): number {
    const dp = new Array(n).fill(0);
    dp[0] = 1;
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;

    for (let i = 1; i < n; i++) {
        const n2 = dp[p2] * 2;
        const n3 = dp[p3] * 3;
        const n5 = dp[p5] * 5;
        dp[i] = Math.min(n2, n3, n5);
        if (dp[i] == n2) {
            p2++;
        }
        if (dp[i] == n3) {
            p3++;
        }
        if (dp[i] == n5) {
            p5++;
        }
    }

    return dp[n - 1];
}
