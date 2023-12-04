package number_bit

func HasAlternatingBits(n int) bool {
	// x := n ^ (n >> 1)
	// return (x & (x + 1)) == 0

	next := -1
	for n != 0 {
		cur := n & 1
		if (cur ^ next) == 0 {
			return false
		}
		next = cur
		n >>= 1
	}
	return true
}
