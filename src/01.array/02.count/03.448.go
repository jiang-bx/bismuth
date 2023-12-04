package array_count

import "math"

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

func FindDisappearedNumbers(nums []int) []int {
	res := []int{}

	// 额外的内存空间, 并且是 O(2n)
	// array := make([]int, len(nums)+1)
	// for _, item := range nums {
	// 	array[item]++
	// }
	// for i := 1; i < len(array); i++ {
	// 	if array[i] == 0 {
	// 		res = append(res, i)
	// 	}
	// }

	i := 0
	// 利用原数组的值充当索引
	for ; i < len(nums); i++ {
		num := int(math.Abs(float64(nums[i])))
		index := num - 1
		if nums[index] > 0 {
			nums[index] *= -1
		}
	}

	for i = 0; i < len(nums); i++ {
		if nums[i] > 0 {
			res = append(res, i+1)
		}
	}

	return res
}
