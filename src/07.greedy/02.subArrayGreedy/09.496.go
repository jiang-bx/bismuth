package sub_array_greedy

func NextGreaterElement(nums1 []int, nums2 []int) []int {
	stack := []int{}
	ans := []int{}
	m := map[int]int{}
	n := len(nums2)

	for i := n - 1; i >= 0; i-- {
		for len(stack) > 0 && stack[len(stack)-1] <= nums2[i] {
			stack = stack[:len(stack)-1]
		}
		m[nums2[i]] = -1
		if len(stack) > 0 {
			m[nums2[i]] = stack[len(stack)-1]
		}
		stack = append(stack, nums2[i])
	}

	for _, v := range nums1 {
		ans = append(ans, m[v])
	}

	return ans
}
