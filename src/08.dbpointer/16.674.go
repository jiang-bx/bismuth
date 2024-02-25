package dbpointer

func FindLengthOfLCIS(nums []int) int {
	res := 1
	max := 1

	for i := 1; i < len(nums); i++ {
		if nums[i] > nums[i-1] {
			res++
		} else {
			res = 1
		}

		if res > max {
			max = res
		}
	}

	return max
}
