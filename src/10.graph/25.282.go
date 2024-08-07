package graph

import (
	"strconv"
)

func AddOperators(num string, target int) []string {
	ans := []string{}
	n := len(num)

	var backtrack func(r int, prev int, cur int, s string)

	backtrack = func(r int, prev int, cur int, s string) {
		if r == n {
			if cur == target {
				ans = append(ans, s)
			}
			return
		}

		for i := r; i < n; i++ {
			end := i + 1
			val := num[r:end]
			if len(val) > 1 && val[0] == '0' {
				break
			}

			t, _ := strconv.Atoi(val)

			if r == 0 {
				backtrack(i+1, t, t, val)
			} else {
				backtrack(i+1, t, cur+t, s+"+"+val)
				backtrack(i+1, -t, cur-t, s+"-"+val)
				backtrack(i+1, prev*t, cur-prev+prev*t, s+"*"+val)
			}

		}
	}

	backtrack(0, 0, 0, "")

	return ans
}
