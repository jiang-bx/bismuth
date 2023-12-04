package hashmap

import "math"

func JudgeSquareSum(c int) bool {
	// 双指针
	// a := 0
	// b := int(math.Sqrt(float64(c)))

	// for a <= b {
	// 	cur := a*a + b*b
	// 	if cur == c {
	// 		return true
	// 	} else if cur > c {
	// 		b--
	// 	} else {
	// 		a++
	// 	}
	// }
	// return false

	max := int(math.Sqrt(float64(c)))

	for a := 0; a <= max; a++ {
		b := int(math.Sqrt(float64(c - a*a)))
		if a*a+b*b == c {
			return true
		}
	}

	return false
}
