package array_greedy

func FindKthNumber(m int, n int, k int) int {
	l := 1 * 1
	r := m * n

	for l < r {
		mid := l + (r-l)/2

		count := 0
		i := m - 1
		j := 0

		for i >= 0 && j < n {
			if (i+1)*(j+1) <= mid {
				count += i + 1
				j++
			} else {
				i--
			}
		}

		if count < k {
			l = mid + 1
		} else {
			r = mid
		}
	}

	return r
}
