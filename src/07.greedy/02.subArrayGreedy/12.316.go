package sub_array_greedy

func RemoveDuplicateLetters(s string) string {
	stack := []byte{}
	stackMap := map[byte]bool{}
	countMap := map[byte]int{}

	for _, v := range s {
		countMap[byte(v)]++
	}

	for _, v := range s {
		ch := byte(v)

		if !stackMap[ch] {

			for len(stack) > 0 && ch < stack[len(stack)-1] && countMap[stack[len(stack)-1]] > 0 {
				stackMap[stack[len(stack)-1]] = false
				stack = stack[:len(stack)-1]
			}

			stack = append(stack, ch)
			stackMap[ch] = true
		}

		countMap[ch]--
	}

	return string(stack)
}
