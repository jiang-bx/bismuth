package array_greedy

var pick = 0

func GuessNumberWarp(n, p int) int {
	pick = p
	return GuessNumber(n)
}

func guess(num int) int {
	if num == pick {
		return 0
	}

	if num > pick {
		return -1
	}

	return 1
}

func GuessNumber(n int) int {
	l := 1
	r := n

	for l < r {
		mid := l + (r-l)/2

		res := guess(mid)

		if res == 0 {
			return mid
		}

		if res == -1 {
			r = mid - 1
		} else {
			l = mid + 1
		}
	}

	return r
}
