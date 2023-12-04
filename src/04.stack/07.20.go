package stack

func IsValid(s string) bool {
	stack := []rune{}
	obj := map[rune]rune{
		')': '(',
		']': '[',
		'}': '{',
	}

	for _, v := range s {
		if v == '(' || v == '[' || v == '{' {
			stack = append(stack, v)
		} else {
			if stack[len(stack)-1] == obj[v] {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		}
	}

	return len(stack) == 0
}
