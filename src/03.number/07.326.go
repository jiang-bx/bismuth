package number_bit

func IsPowerOfThree(n int) bool {
	// for n > 0 && n%3 == 0 {
	// 	n /= 3
	// }
	// return n == 1

	return n > 0 && 1162261467%n == 0
}
