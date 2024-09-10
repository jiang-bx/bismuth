package array_greedy

func HIndex(citations []int) int {
	n := len(citations)
	l := 1
	r := n

	for l <= r {
		mid := l + (r-l)/2

		if citations[n-mid] >= mid {
			l = mid + 1
		} else {
			r = mid - 1
		}
	}

	return r
}
