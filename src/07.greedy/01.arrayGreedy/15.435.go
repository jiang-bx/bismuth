package array_greedy

import "sort"

func EraseOverlapIntervals(intervals [][]int) int {
	n := len(intervals)
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][1] < intervals[j][1]
	})

	res := 0
	pre := intervals[0][1]

	for i := 1; i < n; i++ {
		if pre > intervals[i][0] {
			res++
		} else {
			pre = intervals[i][1]
		}
	}

	return res
}
