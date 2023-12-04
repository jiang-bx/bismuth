package base

import "unicode"

func DetectCapitalUse(word string) bool {
	/**
	n := len(word)
	upperNum := 0
	for _, v := range word {
		if unicode.IsUpper(v) {
			upperNum++
		}
	}

	return n == upperNum || upperNum == 0 || (upperNum == 1 && unicode.IsUpper(rune(word[0])))
	*/

	n := len(word)
	upperNum := 0
	upperIndex := -1
	for i, v := range word {
		if unicode.IsUpper(v) {
			upperNum++
			upperIndex = i
		}
	}

	return n == upperNum || upperNum == 0 || (upperNum == 1 && upperIndex == 0)
}
