/**
 * 动态规划其实是运筹学的一种最优化方法
 * 一般形式就是求最值
 * 求最值核心问题: 需要穷举
 * 动态规划的穷举特点: 存在重叠子问题, 一定会具备最优子结构
 * 明确 baseCase -> 明确状态 -> 明确选择 -> 定义 dp 数组
 */

export function canJump(nums: number[]): boolean {
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > max) {
            return false;
        }

        max = Math.max(max, i + nums[i]);
    }
    return true;
}
