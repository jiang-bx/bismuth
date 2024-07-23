package graph

import (
	"slices"
	"sort"
)

func CombinationSum21(candidates []int, target int) [][]int {
	ans := [][]int{}
	onPath := []int{}
	total := 0
	var backtrack func(r int)

	sort.Ints(candidates)

	backtrack = func(r int) {
		if total == target {
			ans = append(ans, slices.Clone(onPath))
			return
		}

		for i := r; i < len(candidates); i++ {
			if total+candidates[i] > target {
				break
			}

			if i > r && candidates[i] == candidates[i-1] {
				continue
			}

			total += candidates[i]
			onPath = append(onPath, candidates[i])
			backtrack(i + 1)
			total -= candidates[i]
			onPath = onPath[:len(onPath)-1]
		}
	}

	backtrack(0)

	return ans
}
