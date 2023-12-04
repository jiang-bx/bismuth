package number_bit

func IsPowerOfFour(n int) bool {
	return n > 0 && (n&(n-1)) == 0 && n%3 == 1
}
