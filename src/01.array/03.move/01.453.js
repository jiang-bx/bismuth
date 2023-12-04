/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-04-09 09:28:57
 */


/**
 * 给定一个长度为 n 的 非空 整数数组，
 * 每次操作将会使 n - 1 个元素增加 1。
 * 找出让数组所有元素相等的最小操作次数。
 * 
 * 示例：
 * 输入：[1,2,3] 
 * 
 * 输出：3
 * 
 * 解释：
 * 只需要3次操作（注意每次操作会增加两个元素的值）：
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    // 排序, 找到最小值
    // 找规律: 每次操作, n - 1 个数将 加 1
    // 如果 n - 1 个数 减 1 直到和最小值相等
    // 移动次数将是 每个值 - 最小值 的 总和
    let move = 0;
    let min = nums[0];
    let i = 1;
    let len = nums.length;

    for (; i < len; i++) {
        min = Math.min(min, nums[i]);
    }

    i = 0;

    for (; i < len; i++) {
        move += nums[i] - min;
    }

    return move;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var minMoves1 = function(nums) {
    // 动态规划
    // 排序, 只考虑 i - 1 与 i 位置的差值, 就是 move 次数
    // 每次 move 完成后需要将 move 的值累加

    nums.sort((a, b) => {
        if (a - b > 0) {
            return 1
        } else if (a - b < 0) {
            return -1;
        } else {
            return 0;
        }
    });

    let i = 1;
    let len = nums.length;
    let move = 0;

    for (; i < len; i++) {
        let diff = move + nums[i] - nums[i - 1];
        nums[i] += move;
        move += diff;
    }

    return move;
};

export { minMoves, minMoves1 }