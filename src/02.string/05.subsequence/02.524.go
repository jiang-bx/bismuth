package subsequence

import "sort"

func FindLongestWord(s string, dictionary []string) string {
	sort.Slice(dictionary, func(i, j int) bool {
		a, b := dictionary[i], dictionary[j]
		return len(a) > len(b) || len(a) == len(b) && a < b
	})

	n := len(s)

	for _, t := range dictionary {
		i, j, m := 0, 0, len(t)
		for j < m && i < n {
			if t[j] == s[i] {
				j++
			}
			i++
		}
		if j == m {
			return t
		}
	}

	return ""
}
