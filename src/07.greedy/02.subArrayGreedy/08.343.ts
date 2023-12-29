// 给定一个正整数 n ，将其拆分为 k 个 正整数 的和（ k >= 2 ），并使这些整数的乘积最大化。
// 返回最大乘积 。
// 2 <= n <= 58

const hash = new Map<number, number>();
export function integerBreak(n: number): number {
    // // 分解, 递归, 超时, 记忆优化减少重复计算
    // if (n === 2) {
    //     return 1;
    // }

    // if (hash.has(n)) {
    //     return hash.get(n);
    // }

    // let res = -1;
    // for (let i = 1; i < n; i++) {
    //     res = Math.max(res, Math.max(i * (n - i), i * integerBreak(n - i)));
    // }

    // hash.set(n, res);

    // return res;

    // 动态规划
    // if (n <= 3) {
    //     return n - 1;
    // }
    // const dp = new Array(n + 1).fill(0);
    // dp[1] = 1;
    // dp[2] = 2;
    // dp[3] = 3;

    // for (let i = 4; i <= n; i++) {
    //     for (let j = 1; j <= Math.floor(i / 2); j++) {
    //         dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);
    //     }
    // }

    // return dp[n];

    // 数学方法, 可证明, 每个分解数最好为 3 就能取得最大乘积
    if (n <= 3) {
        return n - 1;
    }

    const a = Math.floor(n / 3);
    const b = n % 3;

    if (b === 0) {
        return Math.pow(3, a);
    }

    if (b === 1) {
        return Math.pow(3, a - 1) * 4;
    }

    return Math.pow(3, a) * 2;
}
