/**
 * DFS 回溯
 * @param n
 * @returns
 */
export function countArrangement1(n: number): number {
    // n 从 1 开始
    // 下标也从 1 开始

    const dfs = (num: number, visited: boolean[]) => {
        if (num > n) {
            return 1;
        }

        let ans = 0;

        for (let i = 1; i <= n; i++) {
            if (!visited[i] && (i % num === 0 || num % i === 0)) {
                visited[i] = true;
                ans += dfs(num + 1, visited);
                visited[i] = false;
            }
        }

        return ans;
    };

    return dfs(1, new Array(n + 1).fill(false));
}

/**
 * DFS + 状态压缩
 * @param n
 * @returns
 */
export function countArrangement2(n: number): number {
    const dfs = (num: number, visited: number) => {
        if (num > n) {
            return 1;
        }

        let ans = 0;

        for (let i = 1; i <= n; i++) {
            if (
                ((1 << i) & visited) === 0 &&
                (i % num === 0 || num % i === 0)
            ) {
                ans += dfs(num + 1, (1 << i) | visited);
            }
        }

        return ans;
    };

    return dfs(1, 0);
}

/**
 * DFS + 记忆化
 * @param n
 * @returns
 */
export function countArrangement3(n: number): number {
    const mask = 1 << n;
    const memo = new Array(n + 1).fill([]).map(() => new Array(mask).fill(0));

    const dfs = (num: number, visited: number) => {
        if (num > n) {
            return 1;
        }

        if (memo[num][visited] != 0) {
            return memo[num][visited];
        }

        let ans = 0;

        for (let i = 1; i <= n; i++) {
            if (
                ((1 << (i - 1)) & visited) === 0 &&
                (i % num === 0 || num % i === 0)
            ) {
                ans += dfs(num + 1, (1 << (i - 1)) | visited);
            }
        }

        memo[num][visited] = ans;

        return ans;
    };

    return dfs(1, 0);
}

/**
 * DP + 状态压缩
 * @param n
 * @returns
 */
export function countArrangement(n: number): number {
    const mask = 1 << n;
    const dp = new Array(n + 1).fill([]).map(() => new Array(mask).fill(0));

    dp[0][0] = 1;

    for (let i = 1; i <= n; i++) {
        for (let state = 0; state < mask; state++) {
            for (let k = 1; k <= n; k++) {
                // 首先 k 在 state 中必须是 1
                if (((state >> (k - 1)) & 1) === 0) {
                    continue;
                }

                if (k % i !== 0 && i % k !== 0) {
                    continue;
                }

                // state & (~(1 << (k - 1))) 代表将 state 中数值 k 的位置置零
                dp[i][state] += dp[i - 1][state & ~(1 << (k - 1))];
            }
        }
    }

    return dp[n][mask - 1];
}
