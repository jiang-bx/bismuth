/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-31 09:30:30
 */
/**
 * 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，
 * 数组中的元素一些出现了两次，另一些只出现一次。
 * 找到所有在 [1, n] 范围之间没有出现在数组中的数字。
 * 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 
 * 你可以假定返回的数组不算在额外空间内。
 * 
 * 示例:
 * 输入: [4,3,2,7,8,2,3,1]
 * 输出: [5,6]
 * 
 * 示例:
 * 输入: [1, 1]
 * 输出: [2]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // 使用额外的空间
    let i = 0,
        len = nums.length,
        arr = new Array(len + 1),
        res = [];

    for (; i < len; i++) {
        if (arr[nums[i]]) {
            arr[nums[i]]++;
        } else {
            arr[nums[i]] = 1;
        }
    }

    for (let j = 1, lenJ = arr.length; j < lenJ; j++) {
        if (!arr[j]) {
            res.push(j);
        }
    }

    return res;
};

var findDisappearedNumbers1 = function(nums) {
    // 不使用额外的空间
    let i = 0,
        j = 0,
        len = nums.length,
        res = [];

    for (; i < len; i++) {
        let num = Math.abs(nums[i]);
        let index = num - 1;
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
    }

    for (; j < len; j++) {
        if (nums[j] > 0) {
            let num = j + 1;
            res.push(num);
        }
    }

    return res;
};

// console.log(findDisappearedNumbers1([4,3,2,7,8,2,3,1]));
// console.log(findDisappearedNumbers1([1, 1]));

export {
    findDisappearedNumbers,
    findDisappearedNumbers1
}