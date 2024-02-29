package dbpointer

func FindAnagrams(s string, p string) []int {
	sCnt, pCnt := make([]int, 26), make([]int, 26)
	res := []int{}

	// 统计 p
	for _, v := range p {
		pCnt[v-'a']++
	}

	l := 0

	for r, v := range s {
		curR := v - 'a'
		sCnt[curR]++

		for sCnt[curR] > pCnt[curR] {
			// 找到最左侧的字符, 减少词频
			curL := s[l] - 'a'
			sCnt[curL]--
			l++
		}

		if r-l+1 == len(p) {
			res = append(res, l)
		}
	}

	return res
}
