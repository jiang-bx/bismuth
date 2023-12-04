package array_greedy

import "sort"

func FindLongestChain(pairs [][]int) int {
	n := len(pairs)

	sort.Slice(pairs, func(i, j int) bool {
		return pairs[i][1] < pairs[j][1]
	})

	res := 1
	pos := pairs[0][1]

	for i := 1; i < n; i++ {
		if pos < pairs[i][0] {
			res++
			pos = pairs[i][1]
		}
	}

	return res
}
