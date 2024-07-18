package graph

import "strings"

func SolveNQueens(n int) [][]string {
	var backtrack func(r int)
	ans := [][]string{}
	col := make([]int, n)
	onPath := make([]bool, n)
	d1 := make([]bool, 2*n)
	d2 := make([]bool, 2*n)

	backtrack = func(r int) {
		if r == n {
			board := make([]string, n)

			for i, v := range col {
				board[i] = strings.Repeat(".", v) + "Q" + strings.Repeat(".", n-1-v)
			}

			ans = append(ans, board)

			return
		}

		for c := 0; c < n; c++ {
			rc1 := r - c + n
			rc2 := r + c

			if !onPath[c] && !d1[rc1] && !d2[rc2] {
				col[r] = c

				onPath[c] = true
				d1[rc1] = true
				d2[rc2] = true

				backtrack(r + 1)

				onPath[c] = false
				d1[rc1] = false
				d2[rc2] = false
			}
		}
	}

	backtrack(0)

	return ans
}
