package number_bit

import "math"

func LargestPalindrome(n int) int {
	if n <= 1 {
		return 9
	}

	max := int(math.Pow10(n)) - 1

	for i := max; i >= 0; i-- {
		num, t := int64(i), int64(i)

		for t != 0 {
			num = num*10 + (t % 10)
			t /= 10
		}

		for j := int64(max); j*j >= num; j-- {
			if num%j == 0 {
				return int(num % 1337)
			}
		}
	}

	return -1
}
