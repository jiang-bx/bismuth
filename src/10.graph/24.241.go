package graph

import "strconv"

func DiffWaysToCompute(expression string) []int {
	tmp, err := strconv.Atoi(expression)
	if err == nil {
		return []int{tmp}
	}

	ans := []int{}

	for i, v := range expression {
		if v == '+' || v == '-' || v == '*' {
			lefts := DiffWaysToCompute(expression[:i])
			rights := DiffWaysToCompute(expression[i+1:])

			for _, l := range lefts {
				for _, r := range rights {
					cur := 0
					if v == '+' {
						cur = l + r
					} else if v == '-' {
						cur = l - r
					} else {
						cur = l * r
					}
					ans = append(ans, cur)
				}
			}
		}
	}

	return ans
}
