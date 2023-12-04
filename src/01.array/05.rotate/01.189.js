/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 *
 * 进阶：
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 *
 * 示例 1:
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 *
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 *
 * 示例 2:
 * 输入：nums = [-1,-100,3,99], k = 2
 * 输出：[3,99,-1,-100]
 * 解释:
 * 向右旋转 1 步: [99,-1,-100,3]
 * 向右旋转 2 步: [3,99,-1,-100]
 *
 * 提示：
 * 1 <= nums.length <= 2 * 10^4
 * -2^31 <= nums[i] <= 2^31 - 1
 * 0 <= k <= 10^5
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let len = nums.length;

    k = k % len;

    if (k === 0) {
        return;
    }

    const lastItems = nums.splice(-k);
    nums.unshift(...lastItems);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate1 = function (nums, k) {
    // 使用额外的数组
    const len = nums.length;

    const newArr = new Array(len);

    for (let i = 0; i < len; i++) {
        // 利用取余的方式, 将后面的值放在数组最前边, (i + k) % len
        newArr[(i + k) % len] = nums[i];
    }

    for (let i = 0; i < len; i++) {
        nums[i] = newArr[i];
    }
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate2 = function (nums, k) {
    // 数组翻转
    const reverse = (nums, start, end) => {
        while (start < end) {
            const temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start += 1;
            end -= 1;
        }
    }

    k %= nums.length;
    // 翻转整个数组
    reverse(nums, 0, nums.length - 1);
    // 翻转 0~k 之间的值
    reverse(nums, 0, k - 1);
    // 翻转 k 之后的值
    reverse(nums, k, nums.length - 1);
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate3 = function (nums, k) {

    // len 与 k 的最大公约数 等于 1 一次 do while 循环即可遍历完成, 例如: 7, 3
    // len 与 k 的最大公约数 等于 2 二次 do while 循环即可遍历完成, 例如: 4, 2


    // 环状替换
    let len = nums.length;

    k %= len;

    let count = 0;

    for (let i = 0; count < len; i++) {
        let cur = i;
        let pre = nums[cur];

        do {
            let next = (cur + k) % len; // 第 0 个位置, 应该在的地方
            let temp = nums[next];
            nums[next] = pre;
            pre = temp;
            cur = next;
            count++;
        } while (i !== cur);
    }
};

export { rotate, rotate1, rotate2, rotate3 };
