export function fib1(n: number): number {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

// 动态规划
export function fib2(n: number): number {
    const dp = new Array(n + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;

    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}

// 动态规划, 状态压缩
export function fib(n: number): number {
    if (n === 0) {
        return 0;
    }

    let prev = 1;
    let cur = 1;
    for (let i = 3; i <= n; i++) {
        const sum = prev + cur;
        prev = cur;
        cur = sum;
    }

    return cur;
}
