package array_greedy

func FindMinMoves(machines []int) int {
	n := len(machines)
	sum := 0
	for _, v := range machines {
		sum += v
	}

	if sum%n != 0 {
		return -1
	}

	avg := sum / n
	ls := 0
	rs := sum
	ans := 0

	for i, v := range machines {
		rs -= v
		a := avg*i - ls
		if a < 0 {
			a = 0
		}

		b := (n-i-1)*avg - rs
		if b < 0 {
			b = 0
		}

		if ans < a+b {
			ans = a + b
		}
		ls += v
	}

	return ans
}
