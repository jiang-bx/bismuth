package stack

import "strconv"

func EvalRPN(tokens []string) int {
	n := len(tokens)
	stack := make([]int, n)
	top := 0

	for i := 0; i < n; i++ {
		temp := tokens[i]
		num, err := strconv.Atoi(temp)
		if err != nil {
			num1 := stack[top - 1]
			top--
			num2 := stack[top - 1]
			top--
			res := 0

			if temp == "+" {
				res = num2 + num1
			} else if temp == "-" {
				res = num2 - num1
			} else if temp == "*" {
				res = num2 * num1
			} else {
				res = num2 / num1
			}
			stack[top] = res
		} else {
			stack[top] = num

		}
		top++
	}

	return stack[0]
}
