package reverse

func ReverseStr(s string, k int) string {
	n := len(s)
	reverse := func(sArr []byte, start int, end int) {
		for i, j := start, end; i < j; i, j = i+1, j-1 {
			sArr[i], sArr[j] = sArr[j], sArr[i]
		}
	}

	sByte := []byte(s)

	for i := 0; i < n; i = i + 2*k {
		if i+k-1 < n-1 {
			reverse(sByte, i, i+k-1)
		} else {
			reverse(sByte, i, n-1)
		}
	}

	return string(sByte)
}
