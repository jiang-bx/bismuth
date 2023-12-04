/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-04-07 10:48:13
 */
/**
 * 给你一个未排序的整数数组 nums ，
 * 请你找出其中没有出现的最小的正整数。
 * 进阶：你可以实现时间复杂度为 O(n) 并且只使用常数级别额外空间的解决方案吗？
 * 
 * 示例 1：
 * 输入：nums = [1,2,0]
 * 输出：3
 * 
 * 示例 2：
 * 输入：nums = [3,4,-1,1]
 * 输出：2
 * 
 * 示例 3：
 * 输入：nums = [7,8,9,11,12]
 * 输出：1
 * 
 * 提示：
 * 0 <= nums.length <= 300
 * -231 <= nums[i] <= 231 - 1
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
    // 暴力解法
    if (!nums.length) {
        return 1
    }

    let len = nums.length;
    let cur = 1;
    let map = {};

    for (let i = 0; i < len; i++) {
        map[nums[i]] = 1;
    }

    while (cur < len + 1) {
        if (map[cur]) {
            cur++;
        } else {
            return cur;
        }
    }

    return cur;
};


// console.log(firstMissingPositive([1,2,0]))
// console.log(firstMissingPositive([3,4,-1,1]))
// console.log(firstMissingPositive([7,8,9,11,12]));


/**
 * @param {number[]} nums
 * @return {number}
 */
 const firstMissingPositive1 = function(nums) {
    // O(n), 只使用常数级别额外空间
    // 将数组视为 hashmap, 原地 hash

    let len = nums.length;
    let i = 0;

    for (; i < len; i++) {
        while(nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
            // 交换位置 
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }

    i = 0;

    for (; i < len; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return len + 1;
};


// console.log(firstMissingPositive1([1,2,0]))

console.log(firstMissingPositive1([3,4,-1,1]))

console.log(firstMissingPositive1([7,8,9,11,12]));

export {
    firstMissingPositive,
    firstMissingPositive1
}