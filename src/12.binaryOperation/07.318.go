package binary_operation

func MaxProduct(words []string) int {
	n := len(words)
	nums := []int{}
	for _, word := range words {
		val := 0

		for _, ch := range word {
			val |= 1 << (ch - 'a')
		}

		nums = append(nums, val)
	}

	ans := 0

	for i := 0; i < n-1; i++ {
		for j := i + 1; j < n; j++ {
			if (nums[i] & nums[j]) == 0 {
				product := len(words[i]) * len(words[j])
				if ans < product {
					ans = product
				}
			}
		}
	}

	return ans
}
