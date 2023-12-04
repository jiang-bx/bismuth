export function coinChange(coins: number[], amount: number): number {
    // 定义 dp
    const dp = (n: number) => {
        // base case
        if (n === 0) return 0;
        if (n < 0) return -1;

        // 最小值
        let res = Number.MAX_SAFE_INTEGER;

        for (let i = 0; i < coins.length; i++) {
            const sub = dp(n - coins[i]);
            if (sub === -1) continue;
            res = Math.min(res, 1 + sub);
        }

        return res === Number.MAX_SAFE_INTEGER ? -1 : res;
    };
    return dp(amount);
}
