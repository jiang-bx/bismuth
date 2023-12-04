package transform

import "strconv"

func Compress(chars []byte) int {
	n := len(chars)
	k := 0

	for i, start := 0, 0; i < n; start = i {
		for i < n && chars[i] == chars[start] {
			i++
		}

		chars[k] = chars[start]
		k++
		count := i - start
		if count > 1 {
			countStr := strconv.Itoa(count)
			for j := 0; j < len(countStr); j++ {
				chars[k] = countStr[j]
				k++
			}
		}
	}

	return k
}
