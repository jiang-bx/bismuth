package sub_array_greedy

func NextGreaterElements(nums []int) []int {
	n := len(nums)
	ans := make([]int, n)
	stack := []int{}

	for i := range ans {
		ans[i] = -1
	}

	for i := 0; i < n*2-1; i++ {
		idx := i % n
		for len(stack) > 0 && nums[stack[len(stack)-1]] < nums[idx] {
			ans[stack[len(stack)-1]] = nums[idx]
			stack = stack[:len(stack)-1]
		}
		stack = append(stack, idx)
	}

	return ans
}
