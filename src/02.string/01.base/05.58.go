package base

func LengthOfLastWord(s string) int {
	n := len(s)
	count := 0

	for i := n - 1; i >= 0; i-- {
		if s[i] == ' ' {
			if count == 0 {
				continue
			}
			break
		}
		count++
	}

	return count
}
