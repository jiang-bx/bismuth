package array_greedy

import (
	"sort"
)

func MaxEnvelopes(envelopes [][]int) int {
	sort.Slice(envelopes, func(i, j int) bool {
		a, b := envelopes[i], envelopes[j]

		if a[0] == b[0] {
			return a[1] > b[1]
		}
		return a[0] < b[0]
	})

	// 开启套娃
	n := len(envelopes)
	heights := make([]int, n)
	for i := range heights {
		heights[i] = envelopes[i][1]
	}

	ans := 0
	top := make([]int, n)
	for _, num := range heights {
		l := 0
		r := ans

		for l < r {
			mid := l + (r-l)/2

			if top[mid] >= num {
				r = mid
			} else {
				l = mid + 1
			}
		}

		if l == ans {
			ans++
		}
		top[l] = num
	}

	return ans
}
