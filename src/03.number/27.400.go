package number_bit

import "math"

func FindNthDigit(n int) int {
	cur, base := 1, 9
	for n > cur*base {
		n -= cur * base
		cur++
		base *= 10
		if math.MaxInt32/base < cur {
			break
		}
	}

	n--
	num := int(math.Pow10(cur-1)) + n/cur
	idx := n % cur

	return num / int(math.Pow10(cur-1-idx)) % 10
}
