/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function rob1(nums: number[]): number {
    // 子问题, 在 k 个房子中偷最多的钱
    // 一个子问题, 要能通过其他子问题求解出来: 最优子结构

    // 写出子问题的地推关系
    // f(k) 的偷法有两种:
    // 1. 偷前 k - 1 间房子
    // 2. 偷前 k - 2 间房子 和 最后一间

    // 如果不偷最后一间房, f(k) = f(k-1)
    // 如果偷最后一间房, f(k) = f(k-2) + h(k-1)

    // 确定边界条件
    // k = 0, 没有房子 f(0) = 0
    // k = 1, 只有一间房子 f(1) = h(0)

    // 确定 dp 数组的计算顺序
    const n = nums.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = nums[0];

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    }
    return dp[n];
}

export function rob(nums: number[]): number {
    // 空间优化
    const n = nums.length;

    let cur = 0;
    let prev = 0;

    for (const num of nums) {
        const temp = Math.max(cur, prev + num);
        prev = cur;
        cur = temp;
    }

    return cur;
}
