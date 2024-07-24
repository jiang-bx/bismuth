package graph

import "slices"

func Permute(nums []int) [][]int {
	n := len(nums)
	ans := [][]int{}

	onPath := []int{}

	selected := make([]bool, n)

	var backtrack func()

	// 已选 多少 个
	// 剩余可选 多少 个
	backtrack = func() {

		if len(onPath) == n {
			ans = append(ans, slices.Clone(onPath))
			return
		}

		for i := 0; i < n; i++ {
			if !selected[i] {
				selected[i] = true
				onPath = append(onPath, nums[i])
				backtrack()
				selected[i] = false
				onPath = onPath[:len(onPath)-1]
			}
		}
	}

	backtrack()

	return ans
}
