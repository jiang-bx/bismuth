package graph

import (
	"slices"
	"sort"
)

func PermuteUnique(nums []int) [][]int {
	n := len(nums)
	ans := [][]int{}
	onPath := []int{}
	used := make([]bool, n)
	sort.Ints(nums)

	var backtrack func()

	backtrack = func() {
		if len(onPath) == n {
			ans = append(ans, slices.Clone(onPath))
			return
		}

		for i, v := range nums {
			if used[i] {
				continue
			}

			if i > 0 && nums[i] == nums[i-1] && !used[i-1] {
				continue
			}

			used[i] = true
			onPath = append(onPath, v)

			backtrack()

			used[i] = false
			onPath = onPath[:len(onPath)-1]
		}
	}

	backtrack()

	return ans
}
