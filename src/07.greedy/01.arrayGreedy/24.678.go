package array_greedy

func CheckValidString(s string) bool {
	min, max := 0, 0

	for _, v := range s {
		if v == '(' {
			min++
			max++
		} else if v == ')' {
			min--
			max--
		} else {
			min--
			max++
		}

		if min < 0 {
			min = 0
		}

		if min > max {
			return false
		}

	}

	return min == 0
}
