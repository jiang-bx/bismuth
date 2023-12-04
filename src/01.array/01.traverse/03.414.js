/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-24 09:56:09
 */

/**
 * 给你一个非空数组，返回此数组中 第三大的数 。如果不存在，则返回数组中最大的数。
 * 
 * 示例 1：
 * 输入：[3, 2, 1]
 * 输出：1
 * 解释：第三大的数是 1 。
 * 
 * 示例 2：
 * 输入：[1, 2]
 * 输出：2
 * 解释：第三大的数不存在, 所以返回最大的数 2 。
 * 
 * 示例 3：
 * 输入：[2, 2, 3, 1]
 * 输出：1
 * 解释：注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。
 * 此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。
 * 
 * 提示：
 * 1 <= nums.length <= 104
 * -231 <= nums[i] <= 231 - 1
 * 
 * 进阶：你能设计一个时间复杂度 O(n) 的解决方案吗？
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function(nums) {

    /**
     * 定义存放 前三最大数的 数组 maxs
     * 遍历 nums
     * 如果 maxs <= 0
     *      将 nums[i] 放入 maxs
     * 如果 maxs > 0
     *      将比较 nums[i] 与 maxs 排序, 取前三个值
     */

    function sort(arr) {
        return arr.sort(function(a, b) {
            if (a - b > 0) {
                return -1;
            } else if (a - b < 0) {
                return 1;
            } else {
                return 0;
            }
        })
    }

    let i = 0, 
        len = nums.length,
        maxs = [];
    // O(n)
    for (; i < len; i++) {
        if (maxs.length <= 0) {
            maxs.push(nums[i]);
        } else {
            // 去重 O(n)
            const index = maxs.findIndex(item => item === nums[i]);
            if (index < 0) {
                // O(n)
                maxs = sort([...maxs, nums[i]]);
            }
        }

        if (maxs.length > 3) {
            // O(n)
            maxs = maxs.slice(0, 3);
        }
    }

    return maxs.length >= 3 ? maxs[2] : maxs[0];

    // O(n * (n + n + n)) = O(3n^2)
};

// console.log(thirdMax([2, 2, 3, 1]));
// console.log(thirdMax([1, 2]));
// console.log(thirdMax([3, 2, 1]));

// O(n) 实现方式
const thirdMax1 = function(nums) {
    let i = 1,
        len = nums.length,
        one = nums[0],
        two = -Infinity,
        three = -Infinity;

    for (; i < len; i++) {
        let cur = nums[i];

        if (cur === one || cur === two || cur === three) {
            continue;
        }

        if (cur > one) {
            three = two;
            two = one;
            one = cur;
        } else if (cur > two) {
            three = two;
            two = cur;
        } else if (cur > three) {
            three = cur;
        }
    }

    return three === -Infinity ? one : three;
}

// console.log(thirdMax1([2, 2, 3, 1]));
// console.log(thirdMax1([1, 2]));
// console.log(thirdMax1([3, 2, 1]));

// O(n) 实现方式2, 使用红黑树
const thirdMax3 = function(nums) {
    // 需要维护一个 红黑树的数据结构, 有点难
}

export {
    thirdMax,
    thirdMax1
}