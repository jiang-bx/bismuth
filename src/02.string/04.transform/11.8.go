package transform

import "math"

func MyAtoi(s string) int {
	var res int64 = 0
	isNum, numIndex, sign := false, 0, 0
	hasNum := func(c rune) bool {
		return c >= '0' && c <= '9'
	}

	for i, v := range s {
		if !isNum {
			if v == ' ' {
				continue
			} else if v == '-' || v == '+' {
				numIndex = i + 1
				isNum = true
				if v == '-' {
					sign = -1
				} else {
					sign = 1
				}
			} else if hasNum(v) {
				res = int64(v - '0')
				numIndex = i + 1
				isNum = true
				if sign == 0 {
					sign = 1
				}
			} else {
				break
			}
		} else if hasNum(v) && numIndex == i {
			res *= 10
			res += int64(v - '0')
			numIndex = i + 1
			if res > math.MaxInt32+1 {
				res = math.MaxInt32 + 1
				break
			}
		} else {
			break
		}
	}

	res *= int64(sign)
	if res > math.MaxInt32 {
		res = math.MaxInt32
	} else if res < math.MinInt32 {
		res = math.MinInt32
	}

	return int(res)
}
