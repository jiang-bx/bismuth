package subsequence

func IsSubsequence(s string, t string) bool {
	n, m := len(t), len(s)
	sIndex := 0

	for i := 0; i < n && sIndex < m; i++ {
		if s[sIndex] == t[i] {
			sIndex++
		}
	}

	return sIndex == m
}
