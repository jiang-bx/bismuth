package subsequence

func FindLUSLength2(strs []string) int {
	isSubStr := func(a, b string) bool {
		m, n, i, j := len(a), len(b), 0, 0
		if m > n {
			return false
		}

		for i < m && j < n {
			if a[i] == b[j] {
				i++
			}
			j++
		}
		return i == m
	}

	ans := -1
out:
	for i, s := range strs {
		if len(s) > ans {
			for j, s_ := range strs {
				if i != j && isSubStr(s, s_) {
					continue out
				}
			}
			ans = len(s)
		}
	}

	return ans
}
