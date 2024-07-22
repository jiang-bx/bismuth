package graph

func CombinationSum3(k int, n int) [][]int {
	ans := [][]int{}
	onPath := []int{}
	total := 0
	var backtrack func(r int)

	backtrack = func(r int) {
		if len(onPath) == k && total == n {
			ans = append(ans, append([]int{}, onPath...))
			return
		}

		for i := r; i <= 9; i++ {
			if total+i > n {
				break
			}

			total += i
			onPath = append(onPath, i)
			backtrack(i + 1)
			total -= i
			onPath = onPath[:len(onPath)-1]
		}
	}

	backtrack(1)

	return ans
}
