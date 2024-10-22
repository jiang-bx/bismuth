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
    const mod = 1e9 + 7;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1;

    for (let i = 0; i < n; i++) {
        // 个位
        if (s[i] === "*") {
            // 1 ~ 9
            dp[i + 1] = dp[i] * 9;
        } else {
            const one = Number(s[i]);
            if (one >= 1 && one <= 9) {
                dp[i + 1] = dp[i];
            }
        }

        if (i < 1) {
            continue;
        }

        if (s[i] === "*") {
            if (s[i - 1] === "*") {
                // 个位: * , 十位: *, **
                // 10 ~ 26 => 17 种, 排除: 10, 20, => 15 种
                dp[i + 1] += dp[i - 1] * 15;
            } else {
                // 个位: *, 十位: 数字为 1 或 2,  1*
                if (s[i - 1] === "1") {
                    // 1*
                    dp[i + 1] += dp[i - 1] * 9;
                } else if (s[i - 1] === "2") {
                    // 2*
                    dp[i + 1] += dp[i - 1] * 6;
                }
            }
        } else {
            if (s[i - 1] === "*") {
                // 个位: 数字, 十位: *, *1

                if (Number(s[i]) <= 6) {
                    // 能选 1 或者 2
                    dp[i + 1] += dp[i - 1] * 2;
                } else {
                    // 只能选 1: *7
                    dp[i + 1] += dp[i - 1];
                }
            } else {
                // 个位: 数字, 十位: 数字, 22
                // 10 ~ 26
                const two = Number(s[i - 1]) * 10 + Number(s[i]);
                if (two >= 10 && two <= 26) {
                    dp[i + 1] += dp[i - 1];
                }
            }
        }

        dp[i + 1] %= mod;
    }

    return dp[n];
}
