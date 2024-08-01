package graph

import (
	"strconv"
	"strings"
)

func RestoreIpAddresses(s string) []string {
	ans := []string{}
	onPath := []string{}
	n := len(s)
	var backtrack func(r int)

	backtrack = func(r int) {
		if r == n && len(onPath) == 4 {
			ans = append(ans, strings.Join(onPath, "."))
			return
		}

		for i := r; i < n; i++ {
			end := i + 1
			if len(onPath) == 3 {
				end = n
			}

			val := s[r:end]

			// 不能有前导 0
			if len(val) > 1 && val[0] == '0' {
				break
			}

			if t, _ := strconv.Atoi(val); t > 255 {
				break
			}

			onPath = append(onPath, val)
			backtrack(i + 1)
			onPath = onPath[:len(onPath)-1]
		}

	}

	backtrack(0)

	return ans
}
