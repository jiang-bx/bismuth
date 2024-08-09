package graph

import "strings"

func GenerateParenthesis(n int) []string {
	ans := []string{}
	onPath := []string{}
	var backtrack func(r int)

	backtrack = func(r int) {
		if len(onPath) == 2*n {
			ans = append(ans, strings.Join(onPath, ""))
			return
		}

		if r < n {
			onPath = append(onPath, "(")
			backtrack(r + 1)
			onPath = onPath[:len(onPath)-1]
		}

		if r > len(onPath)-r {
			onPath = append(onPath, ")")
			backtrack(r)
			onPath = onPath[:len(onPath)-1]
		}
	}

	backtrack(0)

	return ans
}
