package count

func CheckRecord(s string) bool {
	absentCount := 0
	for i, v := range s {
		if v == 'A' {
			absentCount++
			if absentCount >= 2 {
				return false
			}
		} else if v == 'L' {
			if i >= 2 && s[i-1] == 'L' && s[i-2] == 'L' {
				return false
			}
		}
	}
	return true
}
