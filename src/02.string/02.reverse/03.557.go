package reverse

func ReverseWords(s string) string {
	reverse := func(sArr []byte, start int, end int) {
		for i, j := start, end; i < j; i, j = i+1, j-1 {
			sArr[i], sArr[j] = sArr[j], sArr[i]
		}
	}

	n := len(s)
	sByte := []byte(s)


	startIndex := 0

	for i := 0; i < n; i++ {
		if s[i] == ' ' {
			reverse(sByte, startIndex, i-1)
			startIndex = i + 1
		} else if i == n-1 {
			reverse(sByte, startIndex, n-1)
		}
	}

	return string(sByte)
}
