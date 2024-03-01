package dbpointer

func CheckInclusion(s1 string, s2 string) bool {
	s1Cnt, s2Cnt := make([]int, 26), make([]int, 26)
	m := len(s1)

	for _, v := range s1 {
		s1Cnt[v-'a']++
	}

	l := 0
	for r, v := range s2 {
		curR := v - 'a'
		s2Cnt[curR]++
		for s2Cnt[curR] > s1Cnt[curR] {
			curL := s2[l] - 'a'
			s2Cnt[curL]--
			l++
		}

		if r-l+1 == m {
			return true
		}
	}

	return false
}
