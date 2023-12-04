package count

func IsAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	obj := make(map[rune]int)

	for _, v := range s {
		obj[v]++
	}

	for _, v := range t {
		obj[v]--
		if obj[v] < 0 {
			return false
		}
	}

	return true
}
