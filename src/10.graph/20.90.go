package graph

import "sort"

func SubsetsWithDup(nums []int) [][]int {
	ans := [][]int{}
	onPath := []int{}
	n := len(nums)

	var backtrack func(r int)

	backtrack = func(r int) {
		ans = append(ans, append([]int{}, onPath...))

		for i := r; i < n; i++ {
			if i > r && nums[i] == nums[i-1] {
				continue
			}

			onPath = append(onPath, nums[i])
			backtrack(i + 1)
			onPath = onPath[:len(onPath)-1]
		}
	}

	sort.Ints(nums)

	backtrack(0)

	return ans
}
