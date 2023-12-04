package number_bit

func Divide(dividend int, divisor int) int {
	max := (1 << 31) - 1
	min := -(max) - 1
	sign := 1
	res := 0

	if dividend == min && divisor == -1 {
		return max
	}

	if dividend < 0 {
		sign ^= -1
		dividend = -dividend
	}

	if divisor < 0 {
		sign ^= -1
		divisor = -divisor
	}

	for dividend >= divisor {
		temp := divisor
		count := 1
		for dividend >= temp+temp {
			count += count
			temp += temp
		}
		dividend -= temp
		res += count
	}

	if sign > 0 {
		if res > max {
			return max
		} else {
			return res
		}
	} else {
		return -res
	}
}
