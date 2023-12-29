package sub_array_greedy

import "math"

func IntegerBreak(n int) int {
	// 数学方法, 可证明, 每个分解数最好为 3 就能取得最大乘积

	if n <= 3 {
		return n - 1
	}

	// 最大 3 出现的次数
	a := n / 3

	// 除以 3 的余数
	b := n % 3

	if b == 0 {
		return int(math.Pow(float64(3), float64(a)))
	}

	if b == 1 {
		return int(math.Pow(float64(3), float64(a-1))) * 4
	}

	return int(math.Pow(float64(3), float64(a))) * 2
}
