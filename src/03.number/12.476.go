package number_bit

func FindComplement(num int) int {
	temp, n := 1, num
	for num > 0 {
		num >>= 1
		temp <<= 1
	}
	return n ^ (temp - 1)
}
