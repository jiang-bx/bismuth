package array_count

import "math"

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

func FindDuplicates(nums []int) []int {
	res := []int{}

	for i := 0; i < len(nums); i++ {
		// 获取 nums[i] 的值, 有可能是负值
		val := int(math.Abs(float64(nums[i])))

		// 将该 val 作为索引
		index := val - 1

		if nums[index] > 0 {
			nums[index] *= -1
		} else {
			res = append(res, val)
		}
	}

	return res
}
