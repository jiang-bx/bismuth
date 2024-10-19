/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function rob_213(nums: number[]): number {
    // 子问题, 在 k 个房子中偷最多的钱
    // 一个子问题, 要能通过其他子问题求解出来: 最优子结构

    // 写出子问题的地推关系
    // f(k) 的偷法
    // 取了第一个就不能偷 最后一个
    // 取了最后一个, 第一个就不能偷
    // 转为非环形
    // f(k) 的偷法有两种:
    // 1. 偷前 k - 1 间房子
    // 2. 偷前 k - 2 间房子 和 最后一间

    // 如果不偷最后一间房, f(k) = f(k-1)
    // 如果偷最后一间房, f(k) = f(k-2) + h(k-1)

    // 确定边界条件
    // k = 0, 没有房子 f(0) = 0
    // k = 1, 只有一间房子 f(1) = h(0)

    const myRob = (vals: number[]) => {
        let cur = 0;
        let prev = 0;
        for (const val of vals) {
            const temp = Math.max(cur, prev + val);
            prev = cur;
            cur = temp;
        }
        return cur;
    };

    if (nums.length === 0) {
        return 0;
    }

    if (nums.length === 1) {
        return nums[0];
    }

    return Math.max(myRob(nums.slice(0, -1)), myRob(nums.slice(1)));
}
