package match

import "strings"

func RepeatedStringMatch(a, b string) int {
	arr := [26]int{}

	for _, v := range a {
		arr[v-'a'] = 1
	}

	for _, v := range b {
		if arr[v-'a'] != 1 {
			return -1
		}
	}

	var count int
	var sb strings.Builder

	count = len(b) / len(a)
	sb.WriteString(strings.Repeat(a, count))
	for i := 0; i <= 2; i++ {
		if strings.Contains(sb.String(), b) {
			return count + i
		}

		sb.WriteString(a)
	}

	return -1
}
