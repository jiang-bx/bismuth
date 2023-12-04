package number_bit

func IsPowerOfTwo(n int) bool {
	return n > 0 && (n&(n-1)) == 0
}
