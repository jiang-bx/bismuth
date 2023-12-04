package count

import (
	"strconv"
	"strings"
)

func OriginalDigits(s string) string {
	counts := make([]int, 26)
	for _, v := range s {
		counts[v-'a']++
	}

	arr := make([]int, 10)

	arr[0] = counts['z'-'a']
	arr[2] = counts['w'-'a']
	arr[4] = counts['u'-'a']
	arr[6] = counts['x'-'a']
	arr[8] = counts['g'-'a']

	arr[5] = counts['f'-'a'] - arr[4]
	arr[7] = counts['s'-'a'] - arr[6]
	arr[3] = counts['h'-'a'] - arr[8]

	arr[1] = counts['o'-'a'] - arr[0] - arr[2] - arr[4]
	arr[9] = counts['i'-'a'] - arr[6] - arr[8] - arr[5]

	res := ""
	for i, v := range arr {
		res += strings.Repeat(strconv.Itoa(i), v)
	}

	return res
}
