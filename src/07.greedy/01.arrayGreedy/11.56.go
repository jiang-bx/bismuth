package array_greedy

import "sort"

func Merge(intervals [][]int) [][]int {

	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})

	idx := 0
	for i := 1; i < len(intervals); i++ {
		if intervals[idx][1] >= intervals[i][0] {
			if intervals[idx][1] < intervals[i][1] {
				intervals[idx][1] = intervals[i][1]
			}
		} else {
			idx++
			intervals[idx] = intervals[i]
		}
	}

	return intervals[:idx+1]
}
