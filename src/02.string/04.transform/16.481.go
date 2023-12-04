package transform

func MagicalString(n int) int {
	/**
	arr := []int{1, 2, 2}
	count := 0
	arrLen := 3

	for i := 0; i < n; i++ {
		if arr[i] == 1 {
			count++
		}

		if i >= 2 && arrLen <= n {
			lastChar := arr[arrLen-1] ^ 3
			item := arr[i]
			for item > 0 {
				arr = append(arr, lastChar)
				arrLen++
				item--
			}
		}
	}

	return count
	*/

	arr := make([]byte, 0, 100000)
	arr = append(arr, '1', '2', '2')
	count := 0
	arrLen := 3

	for i := 0; i < n; i++ {
		if arr[i] == '1' {
			count++
		}

		if i >= 2 && arrLen <= n {
			lastChar := arr[arrLen-1] ^ 0b11
			if arr[i] == '1' {
				arr = append(arr, lastChar)
				arrLen++
			} else {
				arr = append(arr, lastChar, lastChar)
				arrLen += 2
			}
		}
	}

	return count
}
