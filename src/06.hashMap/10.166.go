package hashmap

import (
	"math"
	"strconv"
	"strings"
)

func FractionToDecimal(numerator int, denominator int) string {
	if numerator%denominator == 0 {
		return strconv.Itoa(numerator / denominator)
	}

	res := strings.Builder{}

	if numerator < 0 != (denominator < 0) {
		res.WriteByte('-')
	}

	numerator = int(math.Abs(float64(numerator)))
	denominator = int(math.Abs(float64(denominator)))

	res.WriteString(strconv.Itoa(numerator / denominator))
	res.WriteByte('.')

	numerator %= denominator

	numMap := map[int]int{}
	for numerator != 0 {
		numMap[numerator] = res.Len()
		numerator *= 10
		res.WriteString(strconv.Itoa(numerator / denominator))
		numerator %= denominator

		if _, ok := numMap[numerator]; ok {
			u := numMap[numerator]
			s := res.String()
			return s[0:u] + "(" + s[u:] + ")"
		}
	}

	return res.String()
}
