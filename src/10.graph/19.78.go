package graph

func Subsets(nums []int) [][]int {
	ans := [][]int{}
	onPath := []int{}
	var backtrack func(r int)

	backtrack = func(r int) {
		ans = append(ans, append([]int{}, onPath...))

		for i := r; i < len(nums); i++ {
			onPath = append(onPath, nums[i])
			backtrack(i + 1)
			onPath = onPath[:len(onPath)-1]
		}
	}

	backtrack(0)

	return ans
}
