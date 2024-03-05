package dbpointer

func FindSubstring(s string, words []string) []int {
	n := len(s)
	m := len(words)
	w := len(words[0])
	need := map[string]int{}
	ans := []int{}

	for _, v := range words {
		need[v]++
	}

	for i := 0; i < w; i++ {
		l := i
		valid := 0

		temp := map[string]int{}

		for r := i; r+w <= n; r += w {
			curR := s[r : r+w]

			if _, ok := need[curR]; ok {
				temp[curR]++

				if temp[curR] == need[curR] {
					valid++
				}
			}

			if r+w-l == m*w {
				if valid == len(need) {
					ans = append(ans, l)
				}

				dele := s[l : l+w]

				l += w

				if _, ok := need[dele]; ok {
					if temp[dele] == need[dele] {
						valid--
					}

					temp[dele]--
				}
			}
		}
	}

	return ans
}
