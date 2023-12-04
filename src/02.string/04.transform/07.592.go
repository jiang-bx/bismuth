package transform

import (
	"fmt"
	"strconv"
	"unicode"
)

func FractionAddition(expression string) string {
	n := len(expression)
	index := 0
	molecule := 0
	denominator := 1
	getMaxDivisor := func(a, b int) int {
		remainder := a % b
		for remainder != 0 {
			a = b
			b = remainder
			remainder = a % b
		}
		return b
	}
	abs := func(a int) int {
		if a < 0 {
			return -a
		}
		return a
	}

	for index < n {
		sign := 1
		if expression[index] == '-' || expression[index] == '+' {
			if expression[index] == '-' {
				sign = -1
			}
			index++
		}

		x := ""
		for index < n && unicode.IsDigit(rune(expression[index])) {
			x += string(expression[index])
			index++
		}

		if sign == -1 {
			x = "-" + x
		}
		index++

		y := ""
		for index < n && unicode.IsDigit(rune(expression[index])) {
			y += string(expression[index])
			index++
		}

		x1, _ := strconv.Atoi(x)
		y1, _ := strconv.Atoi(y)

		molecule = x1*denominator + molecule*y1
		denominator *= y1
	}

	if molecule == 0 {
		return "0/1"
	}

	g := getMaxDivisor(abs(molecule), denominator)

	return fmt.Sprintf("%d/%d", molecule/g, denominator/g)
}
