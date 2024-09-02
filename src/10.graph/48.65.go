package graph

func IsNumber(s string) bool {
	n := len(s)

	check := func(start int, end int, mustInt bool) bool {

		if start > end {
			return false
		}

		if s[start] == '+' || s[start] == '-' {
			start++
		}

		isDot := false
		isNum := false

		for i := start; i <= end; i++ {
			if s[i] == '.' {
				if mustInt || isDot {
					return false
				}
				isDot = true
			} else if s[i] >= '0' && s[i] <= '9' {
				isNum = true
			} else {
				return false
			}
		}

		return isNum
	}

	idx := -1
	for i, c := range s {
		if c == 'e' || c == 'E' {
			if idx == -1 {
				idx = i
			} else {
				return false
			}
		}
	}

	ans := true

	if idx != -1 {
		ans = check(0, idx-1, false)
		if !ans {
			return false
		}
		ans = check(idx+1, n-1, true)
	} else {
		ans = check(0, n-1, false)
	}

	return ans
}
