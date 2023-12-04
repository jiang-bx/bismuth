package precisionoperation

func PlusOne(digits []int) []int {
	n := len(digits)
	for i := n - 1; i >= 0; i-- {
		digits[i]++
		digits[i] %= 10
		if digits[i] != 0 {
			return digits
		}
	}

	digits = make([]int, n+1)
	digits[0] = 1

	return digits
}
