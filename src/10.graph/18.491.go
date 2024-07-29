package graph

func FindSubsequences(nums []int) [][]int {
	ans := [][]int{}
	onPath := []int{}
	n := len(nums)

	var backtrack func(r int)

	backtrack = func(r int) {
		if len(onPath) >= 2 {
			ans = append(ans, append([]int{}, onPath...))
		}

		// 去重, 使用过一次之后就不能继续使用了
		used := make(map[int]bool, n)

		for i := r; i < n; i++ {
			if used[nums[i]] {
				continue
			}

			if len(onPath) == 0 || nums[i] >= onPath[len(onPath)-1] {
				onPath = append(onPath, nums[i])
				used[nums[i]] = true
				backtrack(i + 1)
				onPath = onPath[:len(onPath)-1]
			}
		}
	}

	backtrack(0)

	return ans
}
