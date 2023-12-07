package array_greedy

func WiggleSort(nums []int) {
	/*
		// 排序 + 双指针
		n := len(nums)
		clone := make([]int, n)
		copy(clone, nums)

		sort.Slice(clone, func(i, j int) bool {
			return clone[i] < clone[j]
		})

		left := (n - 1) / 2
		right := n - 1

		for i := 0; i < n; i++ {
			if i%2 == 0 {
				nums[i] = clone[left]
				left--
			} else {
				nums[i] = clone[right]
				right--
			}
		}
	*/

	// 桶排序
	bucket := make([]int, 5001)
	for _, v := range nums {
		bucket[v]++
	}

	j := 5000
	for i := 1; i < len(nums); i += 2 {
		for bucket[j] == 0 {
			j--
		}
		nums[i] = j
		bucket[j]--
	}

	for i := 0; i < len(nums); i += 2 {
		for bucket[j] == 0 {
			j--
		}
		nums[i] = j
		bucket[j]--
	}
}
