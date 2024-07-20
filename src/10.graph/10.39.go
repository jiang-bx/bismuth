package graph

import (
	"sort"
)

func CombinationSum1(candidates []int, target int) [][]int {
	ans := [][]int{}
	onPath := []int{}
	total := 0
	var backtrack func(startIndex int)

	backtrack = func(startIndex int) {
		if total == target {
			ans = append(ans, append([]int{}, onPath...))
			return
		}

		for i := startIndex; i < len(candidates); i++ {
			val := candidates[i]

			if total+val > target {
				continue
			}

			total += val
			onPath = append(onPath, val)

			backtrack(i)

			total -= val
			onPath = onPath[:len(onPath)-1]
		}
	}

	backtrack(0)

	return ans
}

func CombinationSum(candidates []int, target int) [][]int {
	ans := [][]int{}
	onPath := []int{}
	total := 0
	var backtrack func(startIndex int)

	sort.Ints(candidates)

	backtrack = func(startIndex int) {
		if total == target {
			ans = append(ans, append([]int{}, onPath...))
			return
		}

		for i := startIndex; i < len(candidates); i++ {
			val := candidates[i]

			if total+val > target {
				break
			}

			total += val
			onPath = append(onPath, val)

			backtrack(i)

			total -= val
			onPath = onPath[:len(onPath)-1]
		}
	}

	backtrack(0)

	return ans
}
