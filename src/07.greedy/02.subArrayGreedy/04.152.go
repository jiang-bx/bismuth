package sub_array_greedy

func MaxProduct(nums []int) int {
	minP, maxP, ans, temp := nums[0], nums[0], nums[0], 0

	for i := 1; i < len(nums); i++ {
		temp = Max(nums[i], Max(nums[i]*maxP, nums[i]*minP))
		minP = Min(nums[i], Min(nums[i]*maxP, nums[i]*minP))
		maxP = temp
		ans = Max(ans, maxP)
	}
	return ans
}

func Min(a, b int) int {
	if a < b {
		return a
	}

	return b
}
