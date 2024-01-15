package dbpointer

import "strings"

func ReverseVowels(s string) string {
	arr := []byte(s)
	vowels := "aeiouAEIOU"

	i := 0
	j := len(arr) - 1

	for i < j {
		isExistLeft := strings.ContainsRune(vowels, rune(arr[i]))
		isExistRight := strings.ContainsRune(vowels, rune(arr[j]))

		if isExistLeft && isExistRight {
			temp := arr[i]
			arr[i] = arr[j]
			arr[j] = temp
			i++
			j--
			continue
		}

		if !isExistLeft {
			i++
		}

		if !isExistRight {
			j--
		}
	}

	return string(arr)
}
