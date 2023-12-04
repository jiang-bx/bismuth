package match

import (
	"math"
)

func Maximum69Number(num int) int {
	/**
	s := strings.Replace(strconv.Itoa(num), "6", "9", 1)
	n, _ := strconv.Atoi(s)
	return n
	*/

	i, th, re := 0, 0, num

	for re != 0 {
		i++
		if re%10 == 6 {
			th = i
		}
		re /= 10
	}

	return num + int(3*math.Pow10(th-1))
}
