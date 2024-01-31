package dbpointer

func RemoveDuplicates1(nums []int) int {
	// 双指针解法
	// i, j := 0, 1
	// for j < len(nums) {
	// 	if nums[i] != nums[j] {
	// 		if j-i > 1 {
	// 			nums[i+1] = nums[j]
	// 		}
	// 		i++
	// 	}
	// 	j++
	// }
	// return i + 1

	// 通用解法
	idx := 0
	for _, v := range nums {
		if idx < 1 || nums[idx-1] != v {
			nums[idx] = v
			idx++
		}
	}
	return idx
}
