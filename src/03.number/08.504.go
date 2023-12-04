package number_bit

import (
	"strconv"
)

func ConvertToBase7(num int) string {
	/**
	if num == 0 {
		return "0"
	}

	pre := ""
	if num < 0 {
		pre = "-"
	}

	res := ""
	base := 7
	num = int(math.Abs(float64(num)))

	for num > 0 {
		res = strconv.Itoa(num%base) + res
		num /= base
	}

	return pre + res
	*/

	// 利用 api
	return strconv.FormatInt(int64(num), 7)
}
