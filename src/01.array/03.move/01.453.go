package array_move

/**
 * 给定一个长度为 n 的 非空 整数数组，
 * 每次操作将会使 n - 1 个元素增加 1。
 * 找出让数组所有元素相等的最小操作次数。
 *
 * 示例：
 * 输入：[1,2,3]
 *
 * 输出：3
 *
 * 解释：
 * 只需要3次操作（注意每次操作会增加两个元素的值）：
 * [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 *
 */
func MinMoves(nums []int) int {

	length := len(nums)
	i := 0
	min := nums[0]
	count := 0

	for ; i < length; i++ {
		if min > nums[i] {
			min = nums[i]
		}
	}

	// 移动次数将是 每个值 - 最小值 的 总和

	for i = 0; i < length; i++ {
		count += nums[i] - min
	}

	return count
}
