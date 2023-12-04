package reverse

func ReverseWords151(s string) string {
	n := len(s)
	left := 0
	right := n - 1

	for left <= right && s[left] == ' ' {
		left++
	}

	for left <= right && s[right] == ' ' {
		right--
	}

	sArr := []byte{}

	for left <= right {
		index := right
		for index >= left && s[index] != ' ' {
			index--
		}

		for i := index + 1; i <= right; i++ {
			sArr = append(sArr, s[i])
		}

		if index > left {
			sArr = append(sArr, ' ')
		}

		for index >= left && s[index] == ' ' {
			index--
		}
		right = index
	}

	return string(sArr)
}
