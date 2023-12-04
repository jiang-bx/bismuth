package stack

import "unicode"

func Calculate(s string) int {
	n := len(s)
	stack := []int{}
	num := 0
	sign := '+'

	for i, v := range s {
		if unicode.IsDigit(v) {
			num = num*10 + int(v-'0')
		}

		if !unicode.IsDigit(v) && v != ' ' || i == n-1 {
			switch sign {
			case '+':
				stack = append(stack, num)
			case '-':
				stack = append(stack, -num)
			case '*':
				stack[len(stack)-1] *= num
			case '/':
				stack[len(stack)-1] /= num
			default:
				break
			}
			sign = v
			num = 0
		}
	}

	res := 0

	for _, v := range stack {
		res += v
	}

	return res
}
