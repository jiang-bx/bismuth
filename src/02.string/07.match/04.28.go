package match

func StrStr(haystack, needle string) int {
	m, n := len(haystack), len(needle)
	for i := 0; i < m-n+1; i++ {
		if haystack[i] != needle[0] {
			continue
		}

		k, j := i, 0
		for k < m && j < n {
			if haystack[k] != needle[j] {
				break
			}
			k++
			j++
		}

		if j == n {
			return i
		}
	}
	return -1
}
