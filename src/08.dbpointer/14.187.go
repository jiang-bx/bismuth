package dbpointer

func FindRepeatedDnaSequences(s string) []string {
	res := []string{}
	m := map[string]int{}
	n := len(s)

	for i := 0; i < n-9; i++ {
		str := s[i : i+10]
		m[str]++
		if m[str] == 2 {
			res = append(res, str)
		}
	}

	return res
}
