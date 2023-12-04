package transform

import (
	"strconv"
	"strings"
)

func ComplexNumberMultiply(num1 string, num2 string) string {
	/**
	 * num1: a + bi, num2: c + di, i^2 = -1
	 * num1 * num2
	 * = (a + bi) * (c + di)
	 * = a*c + a*di + bi*c + bi*di
	 * = a*c + a*di + bi*c - b*d
	 * = a*c - b*d + (a*d + b*c)i
	 */
	nums1 := strings.Split(num1, "+")
	nums2 := strings.Split(num2, "+")

	a, _ := strconv.Atoi(nums1[0])
	b, _ := strconv.Atoi(strings.Replace(nums1[1], "i", "", 1))
	c, _ := strconv.Atoi(nums2[0])
	d, _ := strconv.Atoi(strings.Replace(nums2[1], "i", "", 1))

	return strconv.Itoa(a*c-b*d) + "+" + strconv.Itoa(a*d+b*c) + "i"
}
