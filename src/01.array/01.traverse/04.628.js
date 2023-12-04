/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-25 09:41:20
 */

/**
 * 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
 * 
 * 示例 1：
 * 输入：nums = [1,2,3]
 * 输出：6
 * 
 * 示例 2：
 * 输入：nums = [1,2,3,4]
 * 输出：24
 * 
 * 示例 3：
 * 输入：nums = [-1,-2,-3]
 * 输出：-6
 * 
 * 提示：
 * 3 <= nums.length <= 104
 * -1000 <= nums[i] <= 1000
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function(nums) {
    let i= 0,
        len = nums.length,
        min1 = Infinity,
        min2 = Infinity,
        max1 = -Infinity,
        max2 = -Infinity,
        max3 = -Infinity;

    // 最大值为, 两个最小负数 * 最大正数
    // 或者 三个最大正数相乘
    
    // len >= 3 肯定
    for (; i < len; i++) {
        let cur = nums[i];

        // 处理负数
        if (cur < min1) {
            min2 = min1;
            min1 = cur;
        } else if (cur < min2) {
            min2 = cur;
        }

        // 处理正数
        if (cur > max3) {
            max1 = max2;
            max2 = max3;
            max3 = cur;
        } else if (cur > max2) {
            max1 = max2;
            max2 = cur;
        } else if (cur > max1) {
            max1 = cur;
        }
    }
                                                                                                                                                                                                                                                                                       
    return Math.max(min1 * min2 * max3, max1 * max2 * max3);
};

// console.log(maximumProduct([-1, -2, -3]))

export { maximumProduct }