package sub_array_greedy

import "math"

func Find132pattern(nums []int) bool {
	// i < j < k && nums[i] < nums[k] < nums[j]

	stack := []int{}
	k := math.MinInt

	for i := len(nums) - 1; i >= 0; i-- {

		if k > nums[i] {
			return true
		}

		for len(stack) > 0 && stack[len(stack)-1] < nums[i] {
			k = stack[len(stack)-1]
			stack = stack[:len(stack)-1]
		}

		stack = append(stack, nums[i])
	}

	return false
}
