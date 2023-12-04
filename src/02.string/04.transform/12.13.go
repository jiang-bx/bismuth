package transform

func RomanToInt(s string) int {
	sMap := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	res := 0
	for i, n := 0, len(s); i < n; {
		if i+1 < n && sMap[s[i]] < sMap[s[i+1]] {
			res += sMap[s[i+1]] - sMap[s[i]]
			i += 2
		} else {
			res += sMap[s[i]]
			i++
		}
	}

	return res
}
