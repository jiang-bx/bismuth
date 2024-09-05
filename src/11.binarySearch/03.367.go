package array_greedy

func IsPerfectSquare(num int) bool {
	l := 1
	r := num

	for l <= r {
		mid := l + (r-l)/2
		res := mid
		if res == num {
			return true
		} else if res > num {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}

	return false
}
