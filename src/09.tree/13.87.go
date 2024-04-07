package tree

import "sort"

func IsScramble(s1 string, s2 string) bool {
	if s1 == s2 {
		return true
	}

	b1 := []byte(s1)
	sort.Slice(b1, func(i, j int) bool {
		return b1[i] < b1[j]
	})
	str1 := string(b1)

	b2 := []byte(s2)
	sort.Slice(b2, func(i, j int) bool {
		return b2[i] < b2[j]
	})
	str2 := string(b2)

	if str1 != str2 {
		return false
	}

	n := len(s1)

	for i := 1; i < n; i++ {
		case1 := IsScramble(s1[0:i], s2[0:i]) && IsScramble(s1[i:], s2[i:])
		case2 := IsScramble(s1[0:i], s2[n-i:]) && IsScramble(s1[i:], s2[0:n-i])
		if case1 || case2 {
			return true
		}
	}

	return false
}
