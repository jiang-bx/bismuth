package count

func min(a int, b int) int {
	if a > b {
		return b
	}
	return a
}

func CountBinarySubstrings(s string) int {
	n := len(s)
	i := 0
	last := 0
	res := 0

	for i < n {
		count := 0
		c := s[i]
		for i < n && c == s[i] {
			i++
			count++
		}
		res += min(last, count)
		last = count
	}

	return res
}
