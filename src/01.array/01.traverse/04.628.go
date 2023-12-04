package array_traverse

import "math"

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

func MaximumProduct(nums []int) int {
	// 最大值乘积为,
	// 最小负数 * 第二小负数 * 最大正数
	// 最大正数 * 第二大正数 * 第三大正数

	var min1 int = math.MaxInt64
	var min2 int = math.MaxInt64
	var max1 int = math.MinInt64
	var max2 int = math.MinInt64
	var max3 int = math.MinInt64

	for _, value := range nums {
		// 最小值和第二最小值
		if value < min1 {
			min2 = min1
			min1 = value
		} else if value < min2 {
			min2 = value
		}

		// 三个最大正数
		if value > max1 {
			max3 = max2
			max2 = max1
			max1 = value
		} else if value > max2 {
			max3 = max2
			max2 = value
		} else if value > max3 {
			max3 = value
		}
	}

	var max4 int = max1 * max2 * max3
	var max5 int = min1 * min2 * max1

	if max4 > max5 {
		return max4
	}
	return max5
}
