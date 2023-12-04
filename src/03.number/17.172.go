package number_bit

func TrailingZeroes(n int) int {
	count := 0
	for n >= 5 {
		n /= 5
		count += n
	}
	return count
}
