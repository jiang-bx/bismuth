package base

import "strings"

func IsPalindrome(s string) bool {

	s = strings.ToLower(s)

	sLen := len(s)

	isAlNum := func(c byte) bool {
		return (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')
	}

	for i, j := 0, sLen-1; i < j; {
		if !isAlNum(s[i]) {
			i++
			continue
		}

		if !isAlNum(s[j]) {
			j--
			continue
		}

		if s[i] != s[j] {
			return false
		}

		i++
		j--
	}

	return true
}
