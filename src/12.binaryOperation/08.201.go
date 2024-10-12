package binary_operation

func RangeBitwiseAnd1(left int, right int) int {
	zeros := 0
	for right > left {
		zeros++
		left >>= 1
		right >>= 1
	}
	return left << zeros
}

func RangeBitwiseAnd(left int, right int) int {
	for right > left {
		right &= (right - 1)
	}
	return right
}
