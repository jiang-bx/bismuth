package number_bit

func MyPow(x float64, n int) float64 {
	if x == 0.0 {
		return 0.0
	}

	b := int64(n)
	res := 1.0

	if b < 0 {
		b = -b
		x = 1 / x
	}

	for b > 0 {
		// b 如果是奇数
		if (b & 1) == 1 {
			res *= x
		}
		x *= x
		b >>= 1
	}

	return res
}
