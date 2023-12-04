/*
 * @Descripttion: 
 * @version: 
 * @Author: jbx
 * @Date: 2021-03-30 10:30:46
 */
/**
 * 给定一个非空且只包含非负数的整数数组 nums，
 * 数组的度的定义是指数组里任一元素出现频数的最大值。
 * 你的任务是在 nums 中找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
 * 
 * 示例 1：
 * 输入：[1, 2, 2, 3, 1]
 * 输出：2
 * 解释：
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * 
 * 示例 2：
 * 输入：[1,2,2,3,1,4,2]
 * 输出：6
 * 
 * 提示：
 * nums.length 在1到 50,000 区间范围内。
 * nums[i] 是一个在 0 到 49,999 范围内的整数。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var map = {};

    for (let i = 0, len = nums.length; i < len; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = {
                times: 1,
                maxIndex: i,
                minIndex: i
            }        
        } else {
            let temp = map[nums[i]];
            temp.times++;
            temp.maxIndex = Math.max(temp.maxIndex, i);
            temp.minIndex = Math.min(temp.minIndex, i);
        }
    }

    var maxDu = 1;
    var maxDus = [];
    var minLen = Infinity;

    for (let index in map) {
        if (map[index]) {

            if (maxDu === map[index].times) {
                maxDus.push(map[index]);
            } else if (maxDu < map[index].times) {
                maxDu = map[index].times;
                maxDus = [map[index]];
            }
        }
    }

    for (let i = 0, len = maxDus.length; i < len; i++) {
        let item = maxDus[i];
        let diff = item.maxIndex - item.minIndex + 1;
        minLen = Math.min(minLen, diff);
    }

    return minLen;
};

export { findShortestSubArray }