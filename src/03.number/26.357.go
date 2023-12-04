package number_bit

func CountNumbersWithUniqueDigits(n int) int {
	if n == 0 {
		return 1
	}
	res, temp := 10, 9
	for i := 1; i < n; i++ {
		temp *= 10 - i
		res += temp
	}
	return res
}
