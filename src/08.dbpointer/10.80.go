package dbpointer

func RemoveDuplicates1(nums []int) int {
	slow := 0
	for _, v := range nums {
		if slow < 2 || nums[slow-2] != v {
			nums[slow] = v
			slow++
		}
	}
	return slow
}
