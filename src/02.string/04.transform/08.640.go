package transform

import (
	"strconv"
	"unicode"
)

func SolveEquation(equation string) string {
	coefficient, constant := 0, 0
	i, n, hasLeft := 0, len(equation), true

	for i < n {
		if equation[i] == '=' {
			i++
			hasLeft = false
			continue
		}

		v := "-"
		if hasLeft {
			v = ""
		}
		if equation[i] == '-' || equation[i] == '+' {
			if equation[i] == '-' {
				v = ""
				if hasLeft {
					v = "-"
				}
			}
			i++
		}

		for i < n && unicode.IsDigit(rune(equation[i])) {
			v += string(equation[i])
			i++
		}

		if i < n && equation[i] == 'x' {
			if v == "" {
				v = "1"
			} else if v == "-" {
				v = "-1"
			}
			num1, _ := strconv.Atoi(v)
			coefficient += num1
			i++
		} else {
			num2, _ := strconv.Atoi(v)
			constant += num2
		}
	}

	if coefficient == 0 && constant == 0 {
		return "Infinite solutions"
	}

	if coefficient == 0 {
		return "No solution"
	}

	res := -constant / coefficient

	// x % 1 is always zero
	// if (res % 1) != 0 {
	// 	return "No solution"
	// }

	return "x=" + strconv.Itoa(res)
}
