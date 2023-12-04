package number_bit

func AddDigits(num int) int {
	// 数学解法: 求树根
	// return (num-1)%9 + 1

	// 递归
	res := 0
	for num > 0 {
		res += num % 10
		num /= 10
	}

	if res >= 10 {
		return AddDigits(res)
	}

	return res
}
