package match

import "strings"

func ShortestPalindrome(s string) string {
	n := len(s)
	end := n

	for k := n - 1; k >= 0; k-- {
		i, j, isFailed := 0, k, true
		for ; i <= j; i, j = i+1, j-1 {
			if s[i] != s[j] {
				isFailed = false
				break
			}
		}
		if isFailed {
			end = k + 1
			break
		}
	}

	if end >= n {
		return s
	}

	res := &strings.Builder{}
	for i := n - 1; i >= end; i-- {
		res.WriteByte(s[i])
	}

	return res.String() + s
}
