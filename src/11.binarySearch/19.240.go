package array_greedy

func SearchMatrixII(matrix [][]int, target int) bool {
	m := len(matrix)
	n := len(matrix[0])

	t := 0
	b := m - 1

	for t <= b {
		mid1 := t + (b-t)/2

		if target < matrix[mid1][0] {
			b = mid1 - 1
		} else if target > matrix[mid1][n-1] {
			t = mid1 + 1
		} else {
			l := 0
			r := n - 1

			for l <= r {
				mid := l + (r-l)/2
				if target == matrix[mid1][mid] {
					return true
				}

				if target > matrix[mid1][mid] {
					l = mid + 1
				} else {
					r = mid - 1
				}
			}

			return false
		}
	}

	return false
}
