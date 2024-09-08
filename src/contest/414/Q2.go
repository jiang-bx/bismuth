package c_414

import "sort"

func MaxPossibleScore(start []int, d int) int {
	n := len(start)

	sort.Slice(start, func(i, j int) bool {
		return start[i] < start[j]
	})

	l := 0
	r := start[n-1] + d - start[0]
	res := 0

	max := func(a, b int) int {
		if a > b {
			return a
		}
		return b
	}

	canAchieve := func(mid int) bool {
		last := start[0]
		for i := 1; i < n; i++ {
			rS := start[i]
			rE := start[i] + d

			if last+mid <= rE {
				last = max(last+mid, rS)
			} else {
				return false
			}
		}
		return true
	}

	for l <= r {
		mid := l + (r-l)/2

		if canAchieve(mid) {
			res = mid
			l = mid + 1
		} else {
			r = mid - 1
		}
	}

	return res
}
