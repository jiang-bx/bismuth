package array_rotate

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

func Rotate(nums []int, k int) {
	// numsLen := len(nums)
	// k = k % numsLen

	// backNums := []int{}

	// for i := numsLen - k; i < numsLen; i++ {
	// 	backNums = append(backNums, nums[i])
	// }

	// for i := numsLen - 1 - k; i >= 0; i-- {
	// 	nums[i+k] = nums[i]
	// }

	// for i := 0; i < len(backNums); i++ {
	// 	nums[i] = backNums[i]
	// }

	// numsLen := len(nums)
	// k %= numsLen
	// count := 0

	// for i := 0; count < numsLen; i++ {
	// 	cur := i
	// 	pre := nums[cur]

	// 	for {
	// 		next := (cur + k) % numsLen
	// 		temp := nums[next]
	// 		nums[next] = pre
	// 		pre = temp
	// 		cur = next
	// 		count++

	// 		if i == cur {
	// 			break
	// 		}
	// 	}
	// }

	reverse := func(arr []int) {
		for i := 0; i <= len(arr)/2-1; i++ {
			arr[i], arr[len(arr)-1-i] = arr[len(arr)-1-i], arr[i]
		}
	}

	reverse(nums)
	reverse(nums[:k%len(nums)])
	reverse(nums[(k % len(nums)):])
}
