package array_greedy

func KthSmallest(matrix [][]int, k int) int {
	n := len(matrix)
	l := matrix[0][0]
	r := matrix[n-1][n-1]

	for l < r {
		mid := l + (r-l)/2

		count := 0
		i := n - 1
		j := 0
		for i >= 0 && j < n {
			if matrix[i][j] <= mid {
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
