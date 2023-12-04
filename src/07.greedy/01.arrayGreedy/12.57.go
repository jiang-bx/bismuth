package array_greedy

func Insert(intervals [][]int, newInterval []int) [][]int {
	n := len(intervals)
	i := 0
	res := [][]int{}

	for i < n && intervals[i][1] < newInterval[0] {
		res = append(res, intervals[i])
		i++
	}

	for i < n && intervals[i][0] <= newInterval[1] {
		if newInterval[0] > intervals[i][0] {
			newInterval[0] = intervals[i][0]
		}

		if newInterval[1] < intervals[i][1] {
			newInterval[1] = intervals[i][1]
		}

		i++
	}
	res = append(res, newInterval)

	for i < n {
		res = append(res, intervals[i])
		i++
	}

	return res
}
