/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-04-20 10:26:13
 */


/**
 * 给你一个长度为 n 的整数数组，
 * 请你判断在 最多 改变 1 个元素的情况下，
 * 该数组能否变成一个非递减数列。
 * 
 * 我们是这样定义一个非递减数列的： 
 * 对于数组中任意的 i (0 <= i <= n-2)，
 * 总满足 nums[i] <= nums[i + 1]。
 * 
 * 示例 1:
 * 输入: nums = [4,2,3]
 * 输出: true
 * 解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
 * 
 * 示例 2:
 * 输入: nums = [4,2,1]
 * 输出: false
 * 解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
 * 
 * 提示：
 * 1 <= n <= 10 ^ 4
 * - 10 ^ 5 <= nums[i] <= 10 ^ 5
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {
    let i = 1,
        len = nums.length,
        count = 0;

    for (; i < len; i++) {  
        if (nums[i] < nums[i - 1]) {
            // 原则上尽量不动当前 i 的值, 因为 i 后面的值具体是什么不清楚
            // 例如: 5, 7, 6 时, 只需修改 [i - 1] 位置的 7 为 6, 就可以了 
            if (i === 1 || nums[i] >= nums[i - 2]) {
                nums[i - 1] = nums[i];
            } else {
                // 例如: 5, 7, 4 时, 就不能直接修改 [i - 1] 位置的值为 4 了, 
                // 需要修改[i] 的值. 保证非递减性
                nums[i] = nums[i - 1];
            }
            count++;

            if (count > 1) {
                return false;
            }
        }
    }

    return true
};

// console.log(checkPossibility([4, 2, 3]))
// console.log(checkPossibility([4, 2, 1]))
// console.log(checkPossibility([3, 4, 2, 3]))

export { checkPossibility }
