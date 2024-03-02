package dbpointer

func CharacterReplacement(s string, k int) int {
	cnt := make([]int, 26)
	res := 0
	max := 0
	l := 0

	for r, v := range s {
		curR := v - 'A'
		cnt[curR]++
		if max < cnt[curR] {
			max = cnt[curR]
		}

		for r-l+1 > max+k {
			cnt[s[l]-'A']--
			l++
		}

		if r-l+1 > res {
			res = r - l + 1
		}
	}

	return res
}
