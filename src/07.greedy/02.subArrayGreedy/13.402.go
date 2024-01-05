package sub_array_greedy

func RemoveKdigits(num string, k int) string {
	stack := []byte{}
	for _, v := range num {
		ch := byte(v)
		for k > 0 && len(stack) > 0 && stack[len(stack)-1] > ch {
			stack = stack[:len(stack)-1]
			k--
		}

		if v == '0' && len(stack) == 0 {
			continue
		}
		stack = append(stack, ch)
	}

	for k > 0 && len(stack) > 0 {
		stack = stack[:len(stack)-1]
		k--
	}

	if len(stack) == 0 {
		return "0"
	}

	return string(stack)
}
