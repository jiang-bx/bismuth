package number_bit

var base int = 1337

func myPow(a, k int) int {
	if k == 0 {
		return 1
	}
	a %= base

	if k%2 == 1 {
		return (a * myPow(a, k-1)) % base
	} else {
		sub := myPow(a, k/2)
		return (sub * sub) % base
	}
}

func SuperPow(a int, b []int) int {
	if len(b) <= 0 {
		return 1
	}

	last := b[len(b)-1]
	ans1 := myPow(a, last)
	ans2 := myPow(SuperPow(a, b[:len(b)-1]), 10)

	return (ans1 * ans2) % base
}
