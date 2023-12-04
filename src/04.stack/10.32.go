package stack

func LongestValidParentheses(s string) int {
	stack := []int{-1}
	count := 0

	for i, v := range s {
		if v == '(' {
			stack = append(stack, i)
		} else {
			if len(stack) > 0 {
				stack = stack[:len(stack)-1]
			}

			if len(stack) > 0 {
				num := i - stack[len(stack)-1]
				if count < num {
					count = num
				}
			} else {
				stack = append(stack, i)
			}
		}
	}
	return count
}
