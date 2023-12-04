package base

func CountSegments(s string) int {
	count := 0
	for i, v := range s {
		if (i == 0 || s[i-1] == ' ') && v != ' ' {
			count++
		}
	}
	return count
}
