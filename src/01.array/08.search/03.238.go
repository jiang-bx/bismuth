package arraySearch

func ProductExceptSelf(nums []int) []int {
	n := len(nums)
	res := make([]int, n)
	k := 1

	for i := 0; i < n; i++ {
		res[i] = k
		k *= nums[i]
	}

	k = 1
	for i := n - 1; i >= 0; i-- {
		res[i] *= k
		k *= nums[i]
	}

	return res
}
