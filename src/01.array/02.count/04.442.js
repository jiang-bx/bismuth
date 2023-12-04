/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-04-01 09:45:55
 */


/**
 * 给定一个整数数组 a，
 * 其中1 ≤ a[i] ≤ n （n为数组长度）, 
 * 其中有些元素出现两次而其他元素出现一次。
 * 
 * 找到所有出现两次的元素。
 * 
 * 你可以不用到任何额外空间并在O(n)时间复杂度内解决这个问题吗？
 * 
 * 示例：
 * 输入:
 * [4,3,2,7,8,2,3,1]
 * 输出:
 * [2,3]
 * 
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    // O(n) 使用额外的空间之 map
    
    let i = 0,
        len = nums.length,
        map = {},
        res = [];

    for (; i < len; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]] = 1;
        }
    }

    for (let key in map) {
        if (map[key] > 1) {
            res.push(Number(key));
        }
    }

    return res;
};

// console.log(findDuplicates([4,3,2,7,8,2,3,1]));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates1 = function(nums) {
    // O(n) 使用额外的空间之 arr
    
    let i = 0,
        len = nums.length,
        arr = [],
        res = [];

    for (; i < len; i++) {
        if (arr[nums[i]]) {
            arr[nums[i]]++;
        } else {
            arr[nums[i]] = 1;
        }
    }

    for (let j = 0, lenJ = arr.length; j < lenJ; j++) {
        if (arr[j] > 1) {
            res.push(j);
        }
    }

    return res;
};

// console.log(findDuplicates1([4,3,2,7,8,2,3,1]));


/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates2 = function(nums) {
    // O(n) 不使用额外的空间
    
    let i = 0,
        len = nums.length,
        res = [];

    for (; i < len; i++) {
        let num = Math.abs(nums[i]) - 1;
        if (nums[num] > 0) {
            nums[num] *= -1;
        } else {
            res.push(num + 1);
        }
    }

    return res;
};

console.log(findDuplicates2([4,3,2,7,8,2,3,1]));