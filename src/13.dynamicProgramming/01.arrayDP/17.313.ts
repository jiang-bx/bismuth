/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function nthSuperUglyNumber(n: number, primes: number[]): number {
    const dp = new Array(n).fill(0);
    dp[0] = 1;

    const p = new Array(primes.length).fill(0);

    for (let i = 1; i < n; i++) {
        let min = Infinity;
        const p2 = p.map((pItem, pIndex) => {
            const val = dp[pItem] * primes[pIndex];
            min = Math.min(min, val);
            return val;
        });

        dp[i] = min;

        p2.forEach((item, index) => {
            if (dp[i] === item) {
                p[index]++;
            }
        });
    }

    return dp[n - 1];
}
