/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function checkRecord_552(n: number): number {
    // 'A'：Absent，缺勤
    // 'L'：Late，迟到
    // 'P'：Present，到场
    // n 由 A, L, P 构成
    // AA 不行
    // LLL 不行, 连续超出三天吃到

    // 二维数组记录, A, L

    const mod = 1e9 + 7;
    const dp = new Array(n + 1).fill(0).map(() => {
        return new Array(2).fill(0).map(() => {
            return new Array(3).fill(0);
        });
    });
    dp[0] = [
        [1, 1, 1],
        [1, 1, 1],
    ];
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < 2; j++) {
            for (let k = 0; k < 3; k++) {
                let res = dp[i - 1][j][0];

                if (j === 0) {
                    res += dp[i - 1][1][0];
                }

                if (k < 2) {
                    res += dp[i - 1][j][k + 1];
                }

                dp[i][j][k] = res % mod;
            }
        }
    }

    return dp[n][0][0];
}
