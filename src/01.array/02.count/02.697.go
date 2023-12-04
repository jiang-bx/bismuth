package array_count

import (
	"math"
)

/**
 * 给定一个非空且只包含非负数的整数数组 nums，
 * 数组的度的定义是指: 数组里任一元素出现频数的最大值。
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

type count struct {
	times    int
	minIndex int
	maxIndex int
}

func FindShortestSubArray(nums []int) int {

	// 先要找到最大值度
	var numsMap = map[int]count{}

	for index, item := range nums {
		value, ok := numsMap[item]
		if !ok {
			numsMap[item] = count{
				times:    1,
				minIndex: index,
				maxIndex: index,
			}
		} else {
			value.times++
			value.maxIndex = int(math.Max(float64(value.maxIndex), float64(index)))
			value.minIndex = int(math.Min(float64(value.minIndex), float64(index)))
			numsMap[item] = value
		}
	}

	maxCount := 0
	minLen := math.MaxInt

	for _, value := range numsMap {
		if maxCount < value.times {
			maxCount = value.times
			minLen = value.maxIndex - value.minIndex + 1
		} else if maxCount == value.times {
			minLen = int(math.Min(float64(value.maxIndex-value.minIndex+1), float64(minLen)))
		}
	}

	return minLen
}
