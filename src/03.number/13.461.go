package number_bit

func HammingDistance(x int, y int) int {
	/*
		 0011
		&0010
		-----
		 0010
	*/
	num, count := x^y, 0
	for num != 0 {
		// count += (num & 1)
		// num >>= 1

		// 高效方法
		num &= (num - 1)
		count++
	}
	return count
}
