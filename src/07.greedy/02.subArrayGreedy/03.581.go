package sub_array_greedy

func FindUnsortedSubarray(nums []int) int {
	n := len(nums)
	min := nums[n-1]
	max := nums[0]
	begin := 0
	end := -1

	for i := 0; i < n; i++ {
		// 从左向右找最大值
		if nums[i] < max {
			end = i
		} else {
			max = nums[i]
		}

		if nums[n-1-i] > min {
			begin = n - 1 - i
		} else {
			min = nums[n-1-i]
		}
	}

	return end - begin + 1
}
